import { defineStore } from 'pinia';
import { Validate } from '~/utils/validate';
import { authValidation } from '~/utils/auth-validate';

enum Role {
    MEMBER = "MEMBER",
    ADMIN = "ADMIN",
    SUPERADMIN = "SUPERADMIN",
}
interface User {
    id: string
    email: string
    name: string
    role: Role
    avatar?: string
    avatar_md?: string
    deleted: boolean
}

interface AuthState {
    user?: User
}
export const useAuthStore = defineStore('auth', {
    state: (): AuthState => ({
        user: undefined,
    }),
    actions: {
        async login(data: { email: string, password: string }) {
            try {
                const Api = useApiStore();

                // throw jika error
                data = Validate(authValidation, data);

                // isi state user
                const response = await Api.post('/auth/login', data) as {
                    user: User
                    access_token: string
                    exp: number
                };


                this.user = response.user;
                Api.access_token = response.access_token;
                Api.exp = response.exp;

                window.localStorage.setItem('access_token', response.access_token);
                window.localStorage.setItem('exp', response.exp.toString());

                // redirect ke home admin
                navigateTo('/classes');

            } catch (error) {
                throw error;
            }
        },
        async logout() {
            const Api = useApiStore();
            await Api.delete('/auth/logout')

            // reset access token
            Api.reset();

            // redirect ke home home
            navigateTo('/');
        },
        async getUser() {
            const Api = useApiStore();
            this.user = await Api.get('/auth/profile') as User;
        }
    }
});

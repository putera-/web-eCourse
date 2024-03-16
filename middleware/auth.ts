export default defineNuxtRouteMiddleware(async (to, from) => {
    console.log('lewat midd;lwaee')

    const Auth = useAuthStore();
    const Api = useApiStore();
    const access_token = window.localStorage.getItem('access_token');
    const exp = window.localStorage.getItem('exp');

    if (access_token && exp) {
        Api.access_token = access_token;
        Api.exp = parseInt(exp);
    }

    if (to.path == '/login') {
        if (!Auth.user && access_token) {
            await Auth.getUser();
            if (Auth.user) {
                return navigateTo('/classes');
            } else {
                Api.reset();
            }
        }
    } else {
        if (!access_token) return navigateTo('/login');

        if (!Auth.user) {
            await Auth.getUser();
            if (!Auth.user) {
                Api.reset();
                return navigateTo('/login');
            }
        }
    }
});

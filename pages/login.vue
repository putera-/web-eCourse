<template>
    <div class="banner-area signup">
        <div class="d-table">
            <div class="d-table-cell">
                <div class="container">
                    <div class="page-title-content">
                        <h2>Sign In</h2>
                        <ul>
                            <li>
                                <NuxtLink to="/"> Home </NuxtLink>
                                <i class="flaticon-fast-forward"></i>
                                <p class="active"> Sign In </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <section class="signup-area">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="signup-form">
                        <h2>Welcome Back!</h2>
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="form-group">
                                    <input type="text" v-model="formLogin.email" class="form-control"
                                        placeholder="Email">
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="form-group">
                                    <input type="password" v-model="formLogin.password" class="form-control"
                                        placeholder="Password">
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <button @click="doLogin" class="box-btn">
                                    Sign In
                                </button>
                            </div>
                            <span class="already">New to Rehab Hati! <NuxtLink to="/signup">Sign Up</NuxtLink>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="sign-up-img">
                        <img src="/images/signup.svg" alt="singup">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
// definePageMeta({
//     middleware: ['auth']
// })

const AuthStore = useAuthStore();

const formLogin = ref({
    email: '',
    password: ''
});
const doLogin = async () => {
    // await AuthStore.login(formLogin.value);
}

</script>

<style scoped>
@import '~/assets/css/signup.css';
</style>
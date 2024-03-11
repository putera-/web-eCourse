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
                        <form>
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="User name">
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="form-group">
                                        <input type="password" class="form-control" placeholder="Password">
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <NuxtLink to="/" class="box-btn">
                                        Sign In
                                    </NuxtLink>
                                </div>
                                <span class="already">New to Rehab Hati! <a href="signup.html">Sign Up</a></span>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="sign-up-img">
                        <ImagesSignup />
                        <!-- <img src="/images/signup.svg" alt="singup"> -->
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

</script>

<style scoped>
@import '~/assets/css/signup.css';
</style>
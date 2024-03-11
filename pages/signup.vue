<template>
    <div class="banner-area signup">
        <div class="d-table">
            <div class="d-table-cell">
                <div class="container">
                    <div class="page-title-content">
                        <h2>Sign Up</h2>
                        <ul>
                            <li>
                                <NuxtLink to="/"> Home </NuxtLink>
                                <i class="flaticon-fast-forward"></i>
                                <p class="active"> Sign Up </p>
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
                    <div class="sign-up-img">
                        <div class="img">
                            <img src="/images/signup.svg" alt="singup">
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="signup-form">
                        <h2>Create your Account</h2>
                        <form>
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="User name">
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="form-group">
                                        <input type="email" class="form-control" placeholder="Email">
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="form-group">
                                        <input type="password" class="form-control" placeholder="Password">
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="checkme">
                                        <label class="form-check-label" for="checkme">Remember me</label>
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <a href="signin.html" class="box-btn">
                                        Sign Up
                                    </a>
                                </div>
                                <span class="already">Have already an account? <NuxtLink to="/login">Sign In</NuxtLink>
                                </span>
                            </div>
                        </form>
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
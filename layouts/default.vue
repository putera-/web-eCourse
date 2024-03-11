<template>
    <div v-show="isLoading" id="loading">
        <div id="loading-center">
            <div id="loading-center-absolute">
                <div class="object" id="object_one"></div>
                <div class="object" id="object_two"></div>
                <div class="object" id="object_three"></div>
                <div class="object" id="object_four"></div>
            </div>
        </div>
    </div>

    <div class="navbar-area container">
        <div class="mobile-nav">
            <a href="index.html" class="logo">
                <img src="/images/logo1.png" class="main-logo" alt="logo" />
                <img src="/images/logo2.png" class="white-logo" alt="logo" />
            </a>
        </div>
        <div class="main-nav">
            <div class="container">
                <nav class="navbar navbar-expand-md navbar-light">
                    <a class="navbar-brand" href="index.html">
                        <img src="/images/logo1.png" class="main-logo" alt="logo" />
                        <img src="/images/logo2.png" class="white-logo" alt="logo" />
                    </a>
                    <div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                        <ul class="navbar-nav text-right">
                            <li class="nav-item">
                                <a href="index.html" class="nav-link">Home</a>
                            </li>
                            <li class="nav-item">
                                <a href="about.html" class="nav-link">About</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link dropdown-toggle">Classes</a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item">
                                        <a href="classes.html" class="nav-link">Classes</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="special-class.html" class="nav-link">Special Courses</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="single-class.html" class="nav-link">Classes Details</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link dropdown-toggle">Events</a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item">
                                        <a href="events.html" class="nav-link">Events</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="single-events.html" class="nav-link">Events Details</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link dropdown-toggle">News</a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item">
                                        <a href="news.html" class="nav-link">News</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="single-news.html" class="nav-link">News Details</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link dropdown-toggle">Teachers</a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item">
                                        <a href="single-teacher.html" class="nav-link">Teachers</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="single-teacher.html" class="nav-link">Teachers Details</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link dropdown-toggle">Pages</a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item">
                                        <a href="admission.html" class="nav-link">Admission</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="pricing.html" class="nav-link">Pricing</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="gallery.html" class="nav-link">Gallery</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="testimonials.html" class="nav-link">Testimonials</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="singnup.html" class="nav-link">Signup</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="signin.html" class="nav-link">Signin</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="404.html" class="nav-link">Error 404</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="faq.html" class="nav-link">FAQ</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="terms&condition.html" class="nav-link">Terms & Conditions</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="privecy.html" class="nav-link">Privacy Policy</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a href="contact.html" class="nav-link active">Contact </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </div>

    <div style="min-height: 100vh;">
        <slot />
    </div>

    <div class="footer-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6">
                    <div class="footer-left">
                        <a href="index.html" class="logo"><img src="/images/logo2.png" alt="logo" /></a>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </p>
                        <ul class="footer-social">
                            <li>
                                <a href="#">
                                    <IconsFacebook style="width: 16px; height: 16px; fill:#BA8324" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <IconsTwitter style="width: 16px; height: 16px; fill:#BA8324" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <IconsEnvelope style="width: 16px; height: 16px; fill:#BA8324" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <IconsGoogleplus style="width: 16px; height: 16px; fill:#BA8324" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="footer-content fml-25">
                        <h2>School</h2>
                        <ul>
                            <li>
                                <a href="#"><i class="flaticon-next"></i> Support</a>
                            </li>
                            <li>
                                <a href="#"><i class="flaticon-next"></i> Career</a>
                            </li>
                            <li>
                                <a href="#"><i class="flaticon-next"></i> Teachers</a>
                            </li>
                            <li>
                                <a href="#"><i class="flaticon-next"></i> Staffs</a>
                            </li>
                            <li>
                                <a href="#"><i class="flaticon-next"></i> Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-2 col-md-6">
                    <div class="footer-content fml-15">
                        <h2>Quick Links</h2>
                        <ul>
                            <li>
                                <a href="#"><i class="flaticon-next"></i> Home</a>
                            </li>
                            <li>
                                <a href="#"><i class="flaticon-next"></i> Classes</a>
                            </li>
                            <li>
                                <a href="#"><i class="flaticon-next"></i> Courses</a>
                            </li>
                            <li>
                                <a href="#"><i class="flaticon-next"></i> Why Us?</a>
                            </li>
                            <li>
                                <a href="#"><i class="flaticon-next"></i> FAQ</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="footer-content fml-15 fml-20">
                        <h2>Find Us</h2>
                        <ul>
                            <li>
                                <a href="#"><i class="flaticon-next"></i> +1 (321) 984 754</a>
                            </li>
                            <li>
                                <a href="#"><i class="flaticon-next"></i> +1 (281) 384 574</a>
                            </li>
                            <li>
                                <a href="#"><i class="flaticon-next"></i> <span class="__cf_email__"
                                        data-cfemail="1179747d7d7e51747567783f727e7c">[email&#160;protected]</span></a>
                            </li>
                            <li>
                                <a href="#"><i class="flaticon-next"></i> <span class="__cf_email__"
                                        data-cfemail="e695939696899492a68382908fc885898b">[email&#160;protected]</span></a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="flaticon-next"></i> 28/A Street, New York, USA
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="copy-area">
        <div class="container">
            <div class="col-lg-12">
                <div class="row">
                    <div class="copy">
                        <p>
                            Copyright @RehabHatiofficial. All Rights Reserved by
                            <a href="#" target="_blank"> Rehab Hati E-Course</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="switch-box"><label id="switch" class="switch"><input type="checkbox" onchange="toggleTheme()"
                id="slider"><span class="slider round"></span></label></div>
    <a href="#" class="scroll-top wow animate__animated animate__bounceInDown">
        <IconsAngleDoubleUp style="width: 16px; height: 16px; fill:#fff" />
    </a>
</template>

<script setup lang="ts">
// Preloader
const isLoading = ref(true);
setTimeout(() => {
    isLoading.value = false;
}, 1200);
</script>

<style>
@import '~/assets/css/mainmenu.css';
@import '~/assets/css/style.css';
@import '~/assets/css/dark.css';
</style>
<template>
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
                                <NuxtLink to="/" class="nav-link">Home </NuxtLink>
                            </li>
                            <li class="nav-item">
                                <NuxtLink to="/about" class="nav-link">About</NuxtLink>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link dropdown-toggle">Classes</a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item">
                                        <a href="#" class="nav-link">Classes</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#" class="nav-link">Special Courses</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#" class="nav-link">Classes Details</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link dropdown-toggle">Events</a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item">
                                        <a href="#" class="nav-link">Events</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#" class="nav-link">Events Details</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link dropdown-toggle">News</a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item">
                                        <a href="#" class="nav-link">News</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#" class="nav-link">News Details</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link dropdown-toggle">Teachers</a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item">
                                        <a href="#" class="nav-link">Teachers</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#" class="nav-link">Teachers Details</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <NuxtLink to="/contact" class="nav-link">Contact </NuxtLink>
                            </li>
                            <li class="nav-item">
                                <NuxtLink to="/login" class="nav-link">Login </NuxtLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</template>

<style scoped>
.navbar-area .mean-container a.meanmenu-reveal span {
    position: relative;
    margin-top: -6px;
    top: 8px;
}

.navbar-area {
    background-color: transparent;
    -webkit-transition: 0.3s;
    transition: 0.3s;
    top: 15px;
    position: relative;
    padding-top: 0;
    padding-bottom: 0;
    padding-right: 0;
    padding-left: 0;
}

.navbar-area .navbar-brand .white-logo {
    display: none;
}

.main-nav {
    padding-left: 20px;
    padding-right: 20px;
}

.navbar-area .main-nav {
    background: #ffffff;
    background-image: url(/images/leftNav.png), url(/images/rightNav.png);
    background-size: contain;
    background-position: center left, center right;
    background-repeat: no-repeat, no-repeat;

    /* background: linear-gradient(135deg,  #ffd65e 1%,#ada030 27%,#d1d13c 67%,#9b6b17 99%); */

    border-radius: 90px;
    -webkit-transition: 0.4s;
    transition: 0.4s;
}

.navbar-area .main-nav .navbar {
    -webkit-transition: 0.4s;
    transition: 0.4s;
    padding-right: 0;
    padding-top: 0;
    padding-left: 0;
    padding-bottom: 0;
}

.navbar-area .main-nav .navbar ul {
    padding-left: 0;
    list-style-type: none;
    margin-bottom: 0;
}

.navbar-area .main-nav .navbar .navbar-nav {
    margin-left: auto;
    margin-right: 0;
}

.navbar-area .main-nav .navbar .navbar-nav .nav-item {
    position: relative;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 0;
    padding-right: 0;
}

.navbar-area .main-nav .navbar .navbar-nav .nav-item a {
    font-size: 16px;
    font-weight: 400;
    color: #181818;
    text-transform: capitalize;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    padding-bottom: 0;
    margin-left: 15px;
    margin-right: 15px;
}

.navbar-area .main-nav .navbar .navbar-nav .nav-item a:hover,
.navbar-area .main-nav .navbar .navbar-nav .nav-item a:focus,
.navbar-area .main-nav .navbar .navbar-nav .nav-item a.router-link-exact-active {
    color: #BA8324;
}

.navbar-area .main-nav .navbar .navbar-nav .nav-item a i {
    font-size: 16px;
    position: relative;
    top: 2px;
    margin-left: 1px;
}

.navbar-area .main-nav .navbar .navbar-nav .nav-item:hover a,
.navbar-area .main-nav .navbar .navbar-nav .nav-item.active a {
    color: #BA8324;
}

.navbar-area .main-nav .navbar .navbar-nav .nav-item .dropdown-menu {
    -webkit-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);
    background: #fff;
    position: absolute;
    border: none;
    top: 80px;
    left: 0;
    width: 240px;
    z-index: 99;
    display: block;
    opacity: 0;
    visibility: hidden;
    border-radius: 0;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    padding-top: 15px;
    padding-left: 0px;
    padding-right: 0px;
    padding-bottom: 15px;
}

.navbar-area .main-nav .navbar .navbar-nav .nav-item .dropdown-menu li {
    padding: 0;
    position: relative;
    overflow: hidden;
}

.navbar-area .main-nav .navbar .navbar-nav .nav-item .dropdown-menu li::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 0;
    height: 100px;
    background: #BA8324;
    -webkit-transition: 0.5s all ease;
    transition: 0.5s all ease;
    z-index: -1;
}

.navbar-area .main-nav .navbar .navbar-nav .nav-item .dropdown-menu li a {
    text-transform: capitalize;
    padding: 8px 30px;
    margin: 0;
    color: #181818;
    font-size: 15px;
}

.navbar-area .main-nav .navbar .navbar-nav .nav-item .dropdown-menu li a:hover,
.navbar-area .main-nav .navbar .navbar-nav .nav-item .dropdown-menu li a:focus,
.navbar-area .main-nav .navbar .navbar-nav .nav-item .dropdown-menu li a.router-link-exact-active {
    color: #BA8324;
}

.navbar-area .main-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu {
    left: -245px;
    top: 0;
    opacity: 0;
    visibility: hidden;
}

.navbar-area .main-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li a {
    color: #181818;
}

.navbar-area .main-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li a:hover,
.navbar-area .main-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li a:focus,
.navbar-area .main-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li a.router-link-exact-active {
    color: #BA8324;
    letter-spacing: 1px;
}

.navbar-area .main-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu {
    left: -245px;
    top: 0;
    opacity: 0;
    visibility: hidden;
}

.navbar-area .main-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li a {
    color: #696997;
    text-transform: capitalize;
}

.navbar-area .main-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li a:hover,
.navbar-area .main-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li a:focus,
.navbar-area .main-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li a.router-link-exact-active {
    color: #BA8324;
}

.navbar-area .main-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu {
    left: -245px;
    top: 0;
    opacity: 0;
    visibility: hidden;
}

.navbar-area .main-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li a {
    color: #696997;
    text-transform: capitalize;
}

.navbar-area .main-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li a:hover,
.navbar-area .main-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li a:focus,
.navbar-area .main-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li a.router-link-exact-active {
    color: #BA8324;
}

.navbar-area .main-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu {
    left: 195px;
    top: 0;
    opacity: 0;
    visibility: hidden;
}

.navbar-area .main-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li a {
    color: #696997;
    text-transform: capitalize;
}

.navbar-area .main-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li a:hover,
.navbar-area .main-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li a:focus,
.navbar-area .main-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li a.router-link-exact-active {
    color: #BA8324;
    letter-spacing: 1px;
}

.navbar-area .main-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu {
    left: 195px;
    top: 0;
    opacity: 0;
    visibility: hidden;
}

.navbar-area .main-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li a {
    color: #696997;
    text-transform: capitalize;
}

.navbar-area .main-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li a:hover,
.navbar-area .main-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li a:focus,
.navbar-area .main-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li a.router-link-exact-active {
    color: #BA8324;
}

.navbar-area .main-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu {
    left: 195px;
    top: 0;
    opacity: 0;
    visibility: hidden;
}

.navbar-area .main-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li a {
    color: #696997;
    text-transform: capitalize;
}

.navbar-area .main-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li a:hover,
.navbar-area .main-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li a:focus,
.navbar-area .main-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li a.router-link-exact-active {
    color: #BA8324;
}

.navbar-area .main-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li.active a {
    color: #BA8324;
}

.navbar-area .main-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li:hover .dropdown-menu {
    opacity: 1;
    visibility: visible;
    top: -15px;
}

.navbar-area .main-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li.active a {
    color: #BA8324;
}

.navbar-area .main-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li:hover .dropdown-menu {
    opacity: 1;
    visibility: visible;
    top: -15px;
}

.navbar-area .main-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li.active a {
    color: #BA8324;
}

.navbar-area .main-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li .dropdown-menu li:hover .dropdown-menu {
    opacity: 1;
    visibility: visible;
    top: -15px;
}

.navbar-area .main-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li.active a {
    color: #BA8324;
}

.navbar-area .main-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li .dropdown-menu li:hover .dropdown-menu {
    opacity: 1;
    visibility: visible;
    top: -15px;
}

.navbar-area .main-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li.active a {
    color: #BA8324;
}

.navbar-area .main-nav .navbar .navbar-nav .nav-item .dropdown-menu li .dropdown-menu li:hover .dropdown-menu {
    opacity: 1;
    visibility: visible;
    top: -15px;
}

.navbar-area .main-nav .navbar .navbar-nav .nav-item .dropdown-menu li.active a {
    color: #BA8324;
}

.navbar-area .main-nav .navbar .navbar-nav .nav-item .dropdown-menu li:hover a {
    color: #fff;
}

.navbar-area .main-nav .navbar .navbar-nav .nav-item .dropdown-menu li:hover .dropdown-menu {
    opacity: 1;
    visibility: visible;
    top: -15px;
}

.navbar-area .main-nav .navbar .navbar-nav .nav-item .dropdown-menu li:hover::before {
    width: 100%;
}

.navbar-area .main-nav .navbar .navbar-nav .nav-item .dropdown-toggle::after {
    content: ">";
    margin-left: .355em;
    vertical-align: 0;
    border-top: none;
    border-right: none;
    border-bottom: 0;
    border-left: none;
    -webkit-transition: 0.3s all;
    transition: 0.3s all;
}

.navbar-area .main-nav .navbar .navbar-nav .nav-item:hover .dropdown-menu {
    opacity: 1;
    visibility: visible;
    top: 100%;
}

.navbar-area .main-nav .navbar .navbar-nav .nav-item:hover .dropdown-toggle::after {
    -webkit-transform: rotate(-270deg);
    transform: rotate(-270deg);
}
</style>
<template>
    <div class="banner-area contact">
        <div class="d-table">
            <div class="d-table-cell">
                <div class="container">
                    <div class="page-title-content">
                        <h2>Contact Us</h2>
                        <ul>
                            <li>
                                <NuxtLink to="/"> Home </NuxtLink>
                                <i class="flaticon-fast-forward"></i>
                                <p class="active">Contact</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="contact-service">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-sm-6">
                    <div class="single-service text-center">
                        <div class="service-icon">
                            <IconsClock />
                        </div>
                        <div class="service-content">
                            <p>Sun - Thu : 10:00AM - 06:00PM</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="single-service text-center">
                        <div class="service-icon">
                            <IconsLocation />
                        </div>
                        <div class="service-content">
                            <p>28/A Street, New York City, USA</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-12">
                    <div class="single-service text-center sst-10">
                        <div class="service-icon">
                            <IconsPhone />
                        </div>
                        <div class="service-content">
                            <p>+1 (321) 984 754</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <section class="home-contact-area pb-100">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-lg-6 ps-0">
                    <div class="contact-img">
                        <img src="/images/contact.png" alt="contact" />
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="home-contact-content">
                        <h2>What Do You Want to Know?</h2>
                        <form id="contactForm">
                            <div class="row">
                                <div class="col-lg-6 col-sm-6">
                                    <div class="form-group">
                                        <input type="text" name="name" id="name" class="form-control" required
                                            data-error="Please enter your name" placeholder="Your Name" />
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-sm-6">
                                    <div class="form-group">
                                        <input type="email" name="email" id="email" class="form-control" required
                                            data-error="Please enter your email" placeholder="Your Email" />
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-sm-6">
                                    <div class="form-group">
                                        <input type="text" name="phone_number" id="phone_number" required
                                            data-error="Please enter your number" class="form-control"
                                            placeholder="Your Phone" />
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-sm-6">
                                    <div class="form-group">
                                        <input type="text" name="msg_subject" id="msg_subject" class="form-control"
                                            required data-error="Please enter your subject"
                                            placeholder="Your Subject" />
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div class="col-lg-12 col-md-12">
                                    <div class="form-group">
                                        <textarea name="message" class="form-control" id="message" cols="30" rows="5"
                                            required data-error="Write your message"
                                            placeholder="Your Message"></textarea>
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div class="col-lg-12 col-md-12">
                                    <button type="submit" class="default-btn page-btn box-btn">
                                        Send Message
                                    </button>
                                    <div id="msgSubmit" class="h3 text-center hidden"></div>
                                    <div class="clearfix"></div>
                                </div>
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
.contact {
    position: relative;
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 1;
    background: url(/images/contact-bg1.png);
    height: 400px;
    background-size: cover;
    background-position: center center;
    z-index: 2;
    background-attachment: fixed;
}

.contact::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background: url(/images/banner-overly.png);
    left: 0;
    top: 0;
    background-size: cover;
}

.contact-service {
    position: relative;
    z-index: 1;
    padding: 75px 0;
}

.contact-service .single-service {
    position: relative;
    -webkit-box-shadow: 2px 2px 20px 4px rgba(0, 0, 0, 0.07);
    box-shadow: 2px 2px 20px 4px rgba(0, 0, 0, 0.07);
    padding: 65px 20px;
    background: url(/images/servicebg.png) center center;
    border-radius: 10px;
    -webkit-transition: 0.3s;
    transition: 0.3s;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
}

.contact-service .single-service .service-icon {
    width: 45px;
    height: 45px;
    background-color: #BA8324;
    color: #fff;
    -webkit-transition: 0.3s;
    transition: 0.3s;
    border-radius: 50%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
}

.contact-service .single-service .service-icon svg {
    width: 24px;
    height: 24px;
    fill: #fff
}

.contact-service .single-service .service-content p {
    margin-bottom: 0;
    font-size: 20px;
    color: #4f4f4f;
    margin-top: 10px;
}

.contact-service .single-service:hover {
    -webkit-transform: translateY(-15px);
    transform: translateY(-15px);
}

::-webkit-input-placeholder {
    color: #bdbdbd;
    opacity: 1;
}

:-ms-input-placeholder {
    color: #bdbdbd;
    opacity: 1;
}

::-ms-input-placeholder {
    color: #bdbdbd;
    opacity: 1;
}

::placeholder {
    color: #bdbdbd;
    opacity: 1;
}

.home-contact-area {
    position: relative;
    overflow: hidden;
}

.home-contact-area .text-danger {
    color: #dc3545 !important;
    margin-bottom: 0 !important;
    margin-top: 10px !important;
}

.home-contact-area .text-success {
    color: #28a745 !important;
}

.home-contact-area .home-contact-content {
    position: relative;
    background: url(/images/contact-bg.png);
    background-size: cover;
    padding: 50px;
    border-radius: 40px;
    left: -20%;
    -webkit-box-shadow: 0 1px 10px 5px rgba(228, 221, 221, 0.363);
    box-shadow: 0 1px 10px 5px rgba(228, 221, 221, 0.363);
}

.home-contact-area .home-contact-content h2 {
    font-family: "Playfair Display", serif;
    font-size: 35px;
    margin-bottom: 30px;
    font-weight: bold;
}

.home-contact-area .home-contact-content .form-group {
    margin-bottom: 15px;
}

.home-contact-area .home-contact-content input.form-control {
    height: 60px;
    border-radius: 90px;
    border: 1px solid #c0ccff;
    padding-left: 20px;
}

.home-contact-area .home-contact-content textarea.form-control {
    width: 100%;
    border-radius: 15px;
    border: 1px solid #c0ccff;
    height: 170px;
    -webkit-box-shadow: none;
    box-shadow: none;
    padding-left: 20px;
    padding-top: 15px;
}

.home-contact-area .home-contact-content .form-control:focus {
    -webkit-box-shadow: 0 0 0 0.04rem #BA8324;
    box-shadow: 0 0 0 0.04rem #BA8324;
}

.home-contact-area .box-btn {
    background: #BA8324;
    color: #fff;
    padding: 18px 25px;
    border: 1px solid transparent;
}

.home-contact-area .box-btn:hover {
    border: 1px dashed #BA8324;
    background: #fff;
    color: #BA8324;
}

.home-contact-area .list-unstyled {
    margin-bottom: 0;
    color: #dc3545;
}
</style>
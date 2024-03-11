<template>
    <section class="course-slider-area">
        <div class="container">
            <Carousel control>
                <CarouselInner class="course-slider">
                    <CarouselItem>
                        <div class="row align-items-center">

                            <div class="col-lg-5 col-md-5">
                                <div class="course-slider-img">
                                    <img src="/images/courses/slider-img2.png" alt="course" />
                                </div>
                            </div>
                            <div class="col-lg-7 col-md-7">
                                <div class="course-slider-content">
                                    <h2>Tahrib Ramadhan 2024</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                        gravida.
                                        Risus commodo viverra maecenas accumsan lacus vel facilisis suspendisse ultrices
                                        gravida.
                                    </p>
                                    <b-div class="course-slider-btn">
                                        <a href="" class="box-btn">Registation Now</a>
                                        <a href="" class="border-btn">See More Events</a>
                                    </b-div>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div class="row align-items-center">
                            <div class="col-lg-5 col-md-5">
                                <div class="course-slider-img">
                                    <img src="/images/courses/slider-img.png" alt="course" />
                                </div>
                            </div>
                            <div class="col-lg-7 col-md-7">
                                <div class="course-slider-content">
                                    <h2>Ti7 Terapi intensif</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                        gravida.
                                        Risus commodo viverra maecenas accumsan lacus vel facilisis suspendisse ultrices
                                        gravida.
                                    </p>
                                    <div class="course-slider-btn">
                                        <a href="" class="box-btn">Registation Now</a>
                                        <a href="" class="border-btn">See More Events</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CarouselItem>
                </CarouselInner>
            </Carousel>
        </div>
    </section>
</template>

<script setup lang="ts">

</script>

<style>
.course-slider-area {
    background: #e5eaff;
    position: relative;
    overflow: hidden;
    padding-bottom: 75px;
}

.course-slider-area .course-slider {
    background: url(/images/courses/slider.png);
    background-size: cover;
    width: 100%;
    padding: 30px;
    height: 100%;
    border-radius: 30px;
}

.course-slider-area .course-slider .course-slider-img img {
    border-radius: 12px;
}

.course-slider-area .course-slider .course-slider-content {
    max-width: 75%;
    margin: 0 25px;
}

.course-slider-area .course-slider .course-slider-content h2 {
    font-size: 30px;
    font-family: "Playfair Display", serif;
    color: #fff;
}

.course-slider-area .course-slider .course-slider-content p {
    color: #fff;
    margin: 20px auto;
}

.course-slider-area .owl-nav {
    display: inline-block !important;
}

.course-slider-area .owl-nav button.owl-next {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    border: none;
    font-size: 16px;
    line-height: 0;
    top: 48%;
    position: absolute;
    right: -15px;
    background: #fff;
    font-weight: bold;
    -webkit-transition: 0.3s;
    transition: 0.3s;
    color: #BA8324;
}

.course-slider-area .owl-nav button.owl-next:hover {
    background: #BA8324;
    color: #fff;
}

.course-slider-area .owl-nav button.owl-prev {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    border: none;
    font-size: 16px;
    line-height: 0;
    left: -15px;
    top: 48%;
    position: absolute;
    color: #BA8324;
    font-weight: bold;
    background: #fff;
    -webkit-transition: 0.3s;
    transition: 0.3s;
}

.course-slider-area .owl-nav button.owl-prev:hover {
    background: #BA8324;
    color: #fff;
}

.course-slider-area .course-slider-btn {
    margin-bottom: 15px;
}

.course-slider-area .course-slider-btn .border-btn {
    padding: 18px 30px;
    margin-left: 10px;
}

.course-slider-area .course-slider-btn .border-btn:hover {
    border: 1px dashed #fff;
    background: #BA8324;
}

.course-slider-area .course-slider-btn .box-btn {
    border: 1px solid transparent;
    padding: 20px 30px;
}

.course-slider-area .course-slider-btn .box-btn:hover {
    border: 1px dashed #fff;
    background: #BA8324;
    color: #fff;
}

.course-slider-area .course-slider .course-slider-content {
    max-width: 100%;
    margin: 0;
}

.carousel-control-prev,
.carousel-control-next {
    width: initial;
}
</style>
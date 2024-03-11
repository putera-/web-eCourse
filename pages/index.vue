<template>
    <section class="slider-area">
        <div class="home-slider owl-carousel owl-theme">
            <div class="single-slider single-slider-bg-1">
                <div class="d-table">
                    <div class="d-table-cell">
                        <div class="container">
                            <div class="row align-items-center">
                                <div class="col-lg-12 text-center">
                                    <div class="slider-tittle one">
                                        <h1>
                                            Mengenal Metode Efektif Ruqyah Syar'iyah untuk Penyembuhan
                                        </h1>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum obcaecati
                                            minus doloribus ipsa cumque, nihil at totam itaque cum quisquam corrupti nam
                                            et eveniet quos, rerum, aliquid ipsum? Incidunt, reiciendis
                                        </p>
                                    </div>
                                    <div class="slider-btn bnt1 text-center">
                                        <a href="admission.html" class="box-btn">Admission</a>
                                        <a href="special-class.html" class="border-btn">View Courses</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="single-slider single-slider-bg-2">
                <div class="d-table">
                    <div class="d-table-cell">
                        <div class="container">
                            <div class="row align-items-center">
                                <div class="col-lg-12 text-center">
                                    <div class="slider-tittle two">
                                        <h1>
                                            Menjadi Terapis Ruqyah Profesional
                                        </h1>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum obcaecati
                                            minus doloribus ipsa cumque, nihil at totam itaque cum quisquam corrupti nam
                                            et eveniet quos, rerum, aliquid ipsum? Incidunt, reiciendis
                                        </p>
                                    </div>
                                    <div class="slider-btn bnt2">
                                        <a href="admission.html" class="box-btn">Admission</a>
                                        <a href="special-class.html" class="border-btn">View Courses</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="service-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-sm-6">
                    <div class="single-service text-center">
                        <div class="service-icon">
                            <IconsClock />
                        </div>
                        <div class="service-content">
                            <h2>Fleksibel</h2>
                            <p>Atur sendiri waktu belajar</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="single-service text-center">
                        <div class="service-icon">
                            <IconsLocation />
                        </div>
                        <div class="service-content">
                            <h2>Belajar Dimana aja</h2>
                            <p>Karen full course online interaktif</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-12">
                    <div class="single-service text-center sst-10">
                        <div class="service-icon">
                            <IconsPhone />
                        </div>
                        <div class="service-content">
                            <h2>Konsultasi</h2>
                            <p>Dibuka kesempatan seluasnya</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="home-admission">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="single-addmission">
                        <div class="row">
                            <div class="col-lg-4 col-md-5">
                                <div class="admission-circle">
                                    <h2>Pendaftaran <span> Reguler</span></h2>
                                    <div class="admission-shape1">
                                        <img src="/images/admission/shape1.png" alt="shape" />
                                    </div>
                                    <div class="admission-shape2">
                                        <img src="/images/admission/shape2.png" alt="shape" />
                                    </div>
                                    <div class="admission-shape3">
                                        <img src="/images/admission/shape3.png" alt="shape" />
                                    </div>
                                    <div class="admission-shape4">
                                        <img src="/images/admission/shape4.png" alt="shape" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-8 col-md-7">
                                <div class="admission-content">
                                    <h2>Maret 2024 pendaftaran kelas Reguler</h2>
                                    <p>Admission will Close 30th March 2021. Time Remaining:</p>
                                    <ul class="admission-list">
                                        <li>
                                            <p id="days">0</p>
                                            <span>Days</span>
                                        </li>
                                        <li>
                                            <p id="hours">0</p>
                                            <span>Hours</span>
                                        </li>
                                        <li>
                                            <p id="minutes">0</p>
                                            <span>Minute</span>
                                        </li>
                                        <li>
                                            <p id="seconds">0</p>
                                            <span>Seconds</span>
                                        </li>
                                    </ul>
                                    <a href="admission.html" class="box-btn">Daftar Sekarang</a>
                                </div>
                            </div>
                        </div>
                        <span class="loon">
                            <img src="/images/admission/shape5.png" alt="shape" />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>






    <!-- <Carousel control>
        <CarouselInner>
            <CarouselItem>
                <CarouselItemImage width="800" src="https://source.unsplash.com/random/1920x1080?sig=1" />
            </CarouselItem>
            <CarouselItem>
                <CarouselItemImage width="800" src="https://source.unsplash.com/random/1920x1080?sig=2" />
            </CarouselItem>
            <CarouselItem>
                <CarouselItemImage width="800" src="https://source.unsplash.com/random/1920x1080?sig=3" />
            </CarouselItem>
        </CarouselInner>
    </Carousel> -->

    <IndexSpecialHours />

    <IndexCourseSlider />

    <IndexNews />

    <IndexTeachers />


    <IndexContacts />

</template>

<script setup lang="ts">

</script>

<style scoped>
.service-area {
    position: relative;
    z-index: 1;
    bottom: 100px;
}

.service-area .single-service {
    position: relative;
    -webkit-box-shadow: 2px 2px 20px 4px rgba(0, 0, 0, 0.07);
    box-shadow: 2px 2px 20px 4px rgba(0, 0, 0, 0.07);
    padding: 50px 20px;
    background: url(/images/servicebg.png) center center;
    border-radius: 10px;
    -webkit-transition: 0.3s;
    transition: 0.3s;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 100%;
    width: 100%;
}

.service-area .single-service h2 {
    font-size: 24px;
    font-family: "Playfair Display", serif;
    color: #181818;
    margin-bottom: 12px;
}

.service-area .single-service .service-icon {
    width: 45px;
    height: 45px;
    background-color: #BA8324;
    color: #fff;
    -webkit-transition: 0.3s;
    transition: 0.3s;
    border-radius: 50%;
    margin: 0 auto;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.service-area .single-service .service-icon svg {
    width: 24px;
    height: 24px;
    fill: #fff
}

.service-area .single-service .service-content p {
    margin-bottom: 0;
    font-size: 16px;
    color: #4f4f4f;
    margin-top: 0px;
}

.service-area .single-service:hover {
    -webkit-transform: translateY(-15px);
    transform: translateY(-15px);
}
</style>
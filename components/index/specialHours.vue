<template>


    <section class="home-special-course">
        <div class="container-fluid">
            <div class="section-tittle text-center">
                <h2>Kelas Spesial kami</h2>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </div>
            <Carousel v-bind="settings" :breakpoints="breakpoints" :wrap-around="true">
                <Slide :key="0">
                    <div class="single-home-special-course">
                        <div class="course-img">
                            <img src="/images/courses/img4.png" alt="course" />
                            <div class="course-content">
                                <h2>Kelas Pemula</h2>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <a href="single-class.html" class="box-btn">Selengkapnya</a>
                            </div>
                        </div>
                    </div>
                </Slide>
                <Slide :key="1">
                    <div class="single-home-special-course">
                        <div class="course-img">
                            <img src="/images/courses/img5.png" alt="course" />
                            <div class="course-content">
                                <h2>Kelas Menengah</h2>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <a href="single-class.html" class="box-btn">Selengkapnya</a>
                            </div>
                        </div>
                    </div>
                </Slide>
                <Slide :key="2">
                    <div class="single-home-special-course">
                        <div class="course-img">
                            <img src="/images/courses/img6.png" alt="course" />
                            <div class="course-content">
                                <h2>Kelas Lanjutan</h2>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <a href="single-class.html" class="box-btn">Selengkapnya</a>
                            </div>
                        </div>
                    </div>
                </Slide>
                <Slide :key="3">
                    <div class="single-home-special-course">
                        <div class="course-img">
                            <img src="/images/courses/img7.png" alt="course" />
                            <div class="course-content">
                                <h2>Kelas Instruktur</h2>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <a href="single-class.html" class="box-btn">Selengkapnya</a>
                            </div>
                        </div>
                    </div>
                </Slide>

                <template #addons>
                    <Navigation />
                </template>
            </Carousel>
        </div>
    </section>
</template>

<script setup lang="ts">
import { Carousel, Navigation, Slide } from 'vue3-carousel'

const settings = {
    itemsToShow: 1,
    snapAlign: 'center',
}

const breakpoints = {
    700: {
        itemsToShow: 2,
        snapAlign: 'center',
    },
    1024: {
        itemsToShow: 3,
        snapAlign: 'start',
    },
    1300: {
        itemsToShow: 4,
        snapAlign: 'start',
    },
}

</script>

<style scoped></style>
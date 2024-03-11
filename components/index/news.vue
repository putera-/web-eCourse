<template>
    <section class="home-news pb-100 pt-100">
        <div class="container">
            <div class="section-tittle text-center">
                <h2>Update Kegiatan kami</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptatum, consequuntur
                    eveniet.
                </p>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-6">
                    <div class="single-home-news">
                        <a href="single-news.html">
                            <img src="/images/news/img1.png" alt="news" />
                        </a>
                        <div class="single-home-content">
                            <h2>Lorem ipsum dolor sit amet consectetur</h2>
                            <p class="calender">
                                <i class="flaticon-calendar"></i> 01 April, 2021
                            </p>
                            <p>
                                It is a long established fact that a reader will be distracted by the readable content
                                of a page.
                            </p>
                            <a href="single-news.html" class="line-bnt">Selengkapnya <i class="flaticon-next"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="single-home-news">
                        <a href="single-news.html">
                            <img src="/images/news/img2.png" alt="news" />
                        </a>
                        <div class="single-home-content">
                            <h2>Lorem ipsum dolor sit amet consectetur</h2>
                            <p class="calender">
                                <i class="flaticon-calendar"></i> 01 April, 2021
                            </p>
                            <p>
                                It is a long established fact that a reader will be distracted by the readable content
                                of a page.
                            </p>
                            <a href="single-news.html" class="line-bnt">Selengkapnya <i class="flaticon-next"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 sst-10">
                    <div class="single-home-news">
                        <a href="single-news.html">
                            <img src="/images/news/img3.png" alt="news" />
                        </a>
                        <div class="single-home-content">
                            <h2>Lorem ipsum dolor sit amet consectetur</h2>
                            <p class="calender">
                                <i class="flaticon-calendar"></i> 01 April, 2021
                            </p>
                            <p>
                                It is a long established fact that a reader will be distracted by the readable content
                                of a page.
                            </p>
                            <a href="single-news.html" class="line-bnt">Selengkapnya <i class="flaticon-next"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

</script>

<style scoped>
.home-news {
    position: relative;
    overflow: hidden;
}

.home-news .section-tittle {
    margin-bottom: 30px;
}

.home-news .section-tittle p {
    margin: auto 25%;
}

.home-news .single-home-news {
    cursor: pointer;
    margin-top: 30px;
    -webkit-transition: 0.3s;
    transition: 0.3s;
    position: relative;
}

.home-news .single-home-news a {
    width: 100%;
}

.home-news .single-home-news a img {
    width: 100%;
}

.home-news .single-home-news .single-home-content {
    padding: 30px;
    -webkit-box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.05);
    box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.05);
}

.home-news .single-home-news .single-home-content h2 {
    font-size: 20px;
    font-weight: 600;
    font-family: "Playfair Display", serif;
    margin-bottom: 15px;
}

.home-news .single-home-news .single-home-content .calender {
    margin-bottom: 10px;
    color: #616161;
    font-weight: normal;
    font-size: 14px;
}

.home-news .single-home-news .single-home-content .calender i {
    font-size: 14px;
    margin-right: 5px;
}

.home-news .single-home-news .single-home-content p {
    font-weight: 500;
    color: #616161;
}

.home-news .single-home-news:hover {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
}

.home-news .single-home-news:hover .calender i {
    color: #BA8324;
}

.home-news .single-home-news:hover h2 {
    color: #BA8324;
}

.home-news .single-home-news:hover a {
    color: #BA8324;
}
</style>
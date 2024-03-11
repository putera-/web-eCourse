<template>
    <section class="choose-area">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-lg-6 ps-0">
                    <div class="home-choose-img">
                        <img src="/images/choose1.png" alt="choose" />
                    </div>
                </div>
                <div class="col-lg-6 home-choose">
                    <div class="home-choose-content">
                        <div class="section-tittle">
                            <h2>Mengapa harus ikut?</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum autem repellendus fugiat
                                nisi sequi, esse nostrum in vel repudiandae et quidem voluptates voluptatem eligendi
                                consequuntur, neque odio blanditiis facere unde.
                            </p>
                        </div>
                        <div class="row">
                            <div class="col-lg-4 col-sm-12 col-md-5">
                                <ul class="choose-list-left">
                                    <li>
                                        <IconsCircleCheck />Benefit 1
                                    </li>
                                    <li>
                                        <IconsCircleCheck />Benefit 2
                                    </li>
                                    <li>
                                        <IconsCircleCheck />Benefit 3
                                    </li>
                                    <li>
                                        <IconsCircleCheck />Benefit 4
                                    </li>
                                    <li>
                                        <IconsCircleCheck />Benefit 5
                                    </li>
                                </ul>
                            </div>
                            <div class="col-lg-8 col-sm-12 col-md-7">
                                <div class="choose-list-home">
                                    <ul>
                                        <li>
                                            <IconsCircleCheck />Benefit 6
                                        </li>
                                        <li>
                                            <IconsCircleCheck />Benefit 7
                                        </li>
                                        <li>
                                            <IconsCircleCheck />Benefit 8
                                        </li>
                                        <li>
                                            <IconsCircleCheck />Benefit 9
                                        </li>
                                        <li>
                                            <IconsCircleCheck />Benefit 10
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <a href="#" class="box-btn">Lebih lanjut</a>
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
.choose-area {
    position: relative;
    padding: 75px 0;
    overflow: hidden;
}

.choose-area .home-choose-img {
    position: relative;
    z-index: -1;
    padding-right: 30px;
}

.choose-area .home-choose-img::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 575px;
    background: #BA8324;
    z-index: -2;
    top: -50px;
    border-top-right-radius: 70px;
    left: -50px;
}

.choose-area .home-choose-content {
    max-width: 100%;
}

.choose-area .home-choose-content .section-tittle p {
    color: #616161;
    font-size: 16px;
    padding-right: 10%;
    margin-bottom: 20px;
}

.choose-area .home-choose-content .box-btn {
    background: #BA8324;
    color: #fff;
    padding: 20px 40px;
    width: 30%;
}

.choose-area .home-choose-content .box-btn:hover {
    background: #181818;
}

.choose-area .home-choose-content ul {
    margin: 0;
    padding: 0;
}

.choose-area .home-choose-content ul li {
    color: #444343;
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 10px;
    -webkit-transition: 0.3s;
    transition: 0.3s;
    position: relative;
    display: block;
    padding-left: 22px;
}

.choose-area .home-choose-content ul li svg {
    fill: #BA8324;
    position: absolute;
    top: 2px;
    left: 0;
    width: 18px;
    height: 18px;
}

.choose-area .home-choose-content ul li:hover {
    color: #181818;
}

.choose-area .home-choose-content .choose-list-home {
    padding-left: 25px;
}
</style>
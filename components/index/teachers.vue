<template>
    <section class="home-teachers-area">
        <div class="container">
            <div class="section-tittle text-center">
                <h2>Instruktur & Team</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis magni incidunt dolorem quibusdam
                    neque, non ea fuga vero officia.
                </p>
            </div>
            <div class="row">
                <div class="col-lg-3 col-sm-6">
                    <div class="single-home-teacher">
                        <div class="teacher-img">
                            <a href="single-teacher.html">
                                <img src="/images/teachers/img9.png" alt="teacher" /></a>
                        </div>
                        <div class="teachers-content">
                            <h2>John Doe</h2>
                            <p>Assistant Teacher</p>
                        </div>
                        <div class="teacher-social">
                            <ul>
                                <li>
                                    <a href="#">
                                        <IconsFacebook />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <IconsTwitter />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <IconsEnvelope />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <IconsArrowRight />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="single-home-teacher">
                        <div class="teacher-img">
                            <a href="single-teacher.html">
                                <img src="/images/teachers/img8.png" alt="teacher" /></a>
                        </div>
                        <div class="teachers-content">
                            <h2>Evana Doe</h2>
                            <p>Teacher</p>
                        </div>
                        <div class="teacher-social">
                            <ul>
                                <li>
                                    <a href="#">
                                        <IconsFacebook />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <IconsTwitter />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <IconsEnvelope />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <IconsArrowRight />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="single-home-teacher">
                        <div class="teacher-img">
                            <a href="single-teacher.html">
                                <img src="/images/teachers/img3.png" alt="teacher" /></a>
                        </div>
                        <div class="teachers-content">
                            <h2>Smith Doe</h2>
                            <p>English Teacher</p>
                        </div>
                        <div class="teacher-social">
                            <ul>
                                <li>
                                    <a href="#">
                                        <IconsFacebook />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <IconsTwitter />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <IconsEnvelope />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <IconsArrowRight />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="single-home-teacher">
                        <div class="teacher-img">
                            <a href="single-teacher.html">
                                <img src="/images/teachers/img12.png" alt="teacher" /></a>
                        </div>
                        <div class="teachers-content">
                            <h2>Marida Doe</h2>
                            <p>Cultuaral Advisor</p>
                        </div>
                        <div class="teacher-social">
                            <ul>
                                <li>
                                    <a href="#">
                                        <IconsFacebook />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <IconsTwitter />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <IconsEnvelope />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <IconsArrowRight />
                                    </a>
                                </li>
                            </ul>
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
.home-teachers-area {
    position: relative;
    overflow: hidden;
}

.home-teachers-area .section-tittle {
    margin-bottom: 30px;
}

.home-teachers-area .section-tittle p {
    margin: auto 25%;
}

.home-teachers-area .single-home-teacher {
    margin-top: 30px;
    position: relative;
    -webkit-transition: 0.3s;
    transition: 0.3s;
    text-align: center;
}

.home-teachers-area .single-home-teacher .teacher-img a {
    width: 100%;
}

.home-teachers-area .single-home-teacher .teacher-img img {
    width: 100%;
}

.home-teachers-area .single-home-teacher .teachers-content {
    max-width: 90%;
    position: relative;
    left: 12px;
    -webkit-box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.05);
    box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.05);
    top: -30px;
    background: #fff;
    padding: 15px 0;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
}

.home-teachers-area .single-home-teacher .teachers-content h2 {
    color: #616161;
    font-size: 18px;
    font-family: "Poppins", sans-serif;
    margin-bottom: 0;
    font-weight: 600;
    line-height: 1.4;
}

.home-teachers-area .single-home-teacher .teachers-content p {
    color: #616161;
    font-size: 13px;
    margin-bottom: 0;
    font-weight: 500;
}

.home-teachers-area .single-home-teacher .teacher-social {
    position: absolute;
    width: 100%;
    bottom: -10%;
    -webkit-transition: 0.3s;
    transition: 0.3s;
    opacity: 0;
}

.home-teachers-area .single-home-teacher .teacher-social::before {
    position: absolute;
    content: "";
    background: #fff;
    width: 90%;
    height: 22px;
    left: 12px;
    bottom: 12px;
    -webkit-transition: 0.2s;
    transition: 0.2s;
}

.home-teachers-area .single-home-teacher .teacher-social ul {
    margin: 0;
    padding: 0;
    position: relative;
    z-index: 1;
}

.home-teachers-area .single-home-teacher .teacher-social ul li {
    display: inline-block;
}

.home-teachers-area .single-home-teacher .teacher-social ul li a {
    width: 35px;
    height: 35px;
    background: #fff;
    -webkit-box-shadow: 0 3px rgba(0, 0, 0, 0.05);
    box-shadow: 0 3px rgba(0, 0, 0, 0.05);
    border-radius: 50%;
    line-height: 35px;
    text-align: center;
    -webkit-transition: 0.3s;
    transition: 0.3s;
    color: #BA8324;
    transition: 0.3s;
}

.home-teachers-area .single-home-teacher .teacher-social ul li a svg {
    width: 16px;
    height: 16px;
    fill: #BA8324
}

.home-teachers-area .single-home-teacher .teacher-social ul li a:hover {
    background: #BA8324;
    color: #fff;
    -webkit-transform: translateY(-5px);
    transform: translateY(-5px);
}

.home-teachers-area .single-home-teacher:hover .teacher-social {
    opacity: 1;
    bottom: 5px;
}

.home-teachers-area .single-home-teacher:hover .teacher-social::before {
    -webkit-box-shadow: 0 6px 7px 0 rgba(0, 0, 0, 0.05);
    box-shadow: 0 6px 7px 0 rgba(0, 0, 0, 0.05);
}
</style>
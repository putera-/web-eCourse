<template>
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
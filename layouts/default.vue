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

    <DefaultNavigation />

    <div style="min-height: 100vh;">
        <slot />
    </div>

    <DefaultFooter />
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
@import '~/assets/css/responsive.css';
</style>
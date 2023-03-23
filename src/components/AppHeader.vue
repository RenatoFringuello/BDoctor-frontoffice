<script>
import { store } from '../store.js';

export default {
    name: 'AppHeader',
    data() {
        return {
            store,
            backOfficeUrl: '127.0.0.1:8000',
            open: false,
        }
    },
    methods: {

    },
}
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <img :src="store.getImgPath('B-Doc-Logo', 'png')" alt="BDoc Logo" id="mail-logo">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class=" navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#">Home</a>
                        </li>
                    </ul>
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link me-3" :href="`http://${backOfficeUrl}/login`">Login</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link btn big-btn" :href="`http://${backOfficeUrl}/register`">Sei un professionista
                                sanitario?</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

header {
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0.45) 0px 20px 10px -20px;
}

img#mail-logo {
    width: 65px;
}
</style>
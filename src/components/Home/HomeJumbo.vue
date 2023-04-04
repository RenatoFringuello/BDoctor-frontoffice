<script>
import { store } from '../../store';

export default {
    name: 'HomeJumbo',
    props: {
        specializationList: Array
    },
    data() {
        return {
            store,
        }
    },
    methods: {

    }
}
</script>

<template>
    <section id="jumbo" class="d-flex position-relative">
        <img :src="store.getImgPath('doctors-jumbo2', 'png')" alt="Doctors"
            class="d-none d-lg-block position-absolute bottom-0 end-0">
        <div class="container m-auto jumbo-area">
            <h1 class="text-uppercase text-light fw-bold">Find a doctor now!</h1>
            <p class="text-uppercase">Search among 200.000 doctors.</p>
            <div class="search-bar mt-5 d-flex align-items-center card-shadow">
                <div class="search-contains d-flex align-items-center w-100">
                    <span class="align-middle">Search a</span>
                    <select name="search" id="search" v-model="store.specializationSelected">
                        <option value="" disabled selected> -- Select -- </option>
                        <option v-for="specilization in specializationList" :value="specilization.name">
                            {{ specilization.name.toUpperCase() }}</option>
                    </select>
                    <span class="align-middle">in<span class="fw-bold">Milan</span>
                    </span>
                    <router-link class="text-decoration-none" :to="'doctors-search'" v-if="specializationList.length > 1 && store.specializationSelected != ''">
                        <div class="btn doc-btn search-btn d-flex">
                            <div class="d-flex align-items-center m-auto">
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

section#jumbo {
    width: 100%;
    min-height: 750px;

    background: $light-doc-color;
    background: linear-gradient(0deg, $light-doc-color 0%, $light-doc-color 47%, $light-pro-color 99%, $light-pro-color 100%);
    background-size: cover;
    background-repeat: no-repeat;

    img {
        width: 600px;
        margin-right: 200px;
    }

    h1 {
        font-size: 4.5rem;
    }

    p {
        font-size: 2rem;
        font-weight: 200;
    }
}

div.jumbo-area {
    z-index: 2;

    div.search-bar {
        width: max-content;
        padding: .7rem;
        background-color: white;
        border-radius: 2rem;
    }
}

@media screen and (max-width:1546px) {
    section#jumbo {

        img {
            width: 600px;
            margin-right: 50px;
        }
    }
}

@media screen and (max-width:1335px) {
    section#jumbo {

        img {
            width: 500px;
            margin-right: 10px;
        }
    }
}

@media screen and (max-width:600px) {
    div.search-contains {
        span {
            font-size: .9rem;
        }

        select {
            width: 150px;
            font-size: .9rem;
        }
    }
}

@media screen and (max-width:446px) {
    div.search-contains {
        span {
            font-size: .8rem;
            margin: 0 .3rem;

        }

        select {
            width: 100px;
            font-size: .8rem;
            padding: .1rem .4rem;

        }
    }
}
</style>
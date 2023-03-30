<script>
import { store } from '../store';
import HomeJumbo from '../components/Home/HomeJumbo.vue';
import FeaturedDoctor from '../components/Home/FeaturedDoctors.vue';

export default {
    name: 'AppHome',
    components: { HomeJumbo, FeaturedDoctor },
    data() {
        return {
            store,
            heigth: '1300px',
            size: '500px',
            translate: '85px',
            marginButton: '0px',
            buttonTxt: 'View All'
        }
    },
    methods: {
        showMoreDoc() {
            if (this.heigth == '1300px') {
                this.heigth = 'auto'
                this.size = '100px'
                this.translate = '0px'
                this.buttonTxt = 'Close'
                this.marginButton = '0px'
            } else {
                this.heigth = '1300px'
                this.size = '500px'
                this.translate = '85px'
                this.buttonTxt = 'View All'
                this.marginButton = '200px'
            }
        }
    },
    created() {
        this.store.getDataApi('specializations');
    },
}
</script>

<template>
    <main>
        <HomeJumbo :specializationList="store.specializationList" />

        <section id="best-doctor" class="py-5 position-relative">
            <h2 class="text-center text-uppercase fw-bold mt-5">Featured Doctors</h2>

            <div class="doctors-dropdown position-relative">
                <FeaturedDoctor />
            </div>
            <div class="more-doctors position-absolute bottom-0 start-0 w-100 d-flex">
                <button class="btn btn-primary doc-btn m-auto" @click="showMoreDoc()">{{ buttonTxt }}</button>
            </div>
        </section>

    </main>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;

section#best-doctor {
    background-color: white;

    h2 {
        font-size: 3rem;
    }
}

div.doctors-dropdown {
    height: v-bind(heigth);
    overflow-y: hidden;

    section:last-child {
        margin-bottom: 100px !important;
    }
}

div.more-doctors {
    width: 100%;
    height: v-bind(size);
    background: rgb(255, 255, 255);
    background: linear-gradient(0deg, rgba(255, 255, 255, 1) 32%, rgba(255, 255, 255, 0.865983893557423) 65%, rgba(255, 255, 255, 0) 100%);
    margin-top: v-bind(marginButton);

    button {
        transform: translateY(v-bind(translate));
    }
}
</style>
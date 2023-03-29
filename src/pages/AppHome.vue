<script>
import { store } from '../store';
import HomeJumbo from '../components/Home/HomeJumbo.vue';
import FeaturedSingleDoctor from '../components/Home/FeaturedSingleDoctor.vue';

export default {
    name: 'AppHome',
    components: { HomeJumbo, FeaturedSingleDoctor },
    data() {
        return {
            store,
            heigth: '1300px',
            marginButton: '0px',
            buttonTxt: 'View All'
        }
    },
    methods: {
        showMoreDoc() {
            if (this.heigth == '1300px') {
                this.heigth = 'auto'
                this.buttonTxt = 'Close'
                this.marginButton = '0px'
            } else {
                this.heigth = '1300px'
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
        <HomeJumbo :specializationList="store.specializationList"/>

        <section id="best-doctor" class="py-5 position-relative">
            <h2 class="text-center text-uppercase fw-bold mt-5">Featured Doctors</h2>

            <div class="doctors-dropdown position-relative">
                <FeaturedSingleDoctor v-for="specialization in store.specializationList"
                    :title="specialization.name.charAt(0).toUpperCase().substring() + specialization.name.slice(1)" />
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
    height: 100px;
    background-color: white;
    margin-top: v-bind(marginButton)
}
</style>
<script>
import { store } from '../store';
import HomeJumbo from '../components/Home/HomeJumbo.vue';
import FeaturedDoctor from '../components/Home/FeaturedDoctors.vue';
import HomeWhyBdoc from '../components/Home/HomeWhyBdoc.vue';
import HomeTalkAboutUs from '../components/Home/HomeTalkAboutUs.vue';
import HomeInfo from '../components/Home/HomeInfo.vue';


export default {
    name: 'AppHome',
    components: { HomeJumbo, FeaturedDoctor, HomeWhyBdoc, HomeTalkAboutUs, HomeInfo },
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
        <HomeJumbo :specializationList="store.specializationList" />

        <HomeInfo />

        <!-- Featured Doctor Section -->
        <section id="best-doctor" class="py-5 position-relative bg-main-gradient">
            <h2 class="section-title text-white">Featured Doctors</h2>

            <div class="doctors-dropdown position-relative">
                <FeaturedDoctor />
            </div>
            <div class="more-doctors position-absolute bottom-0 start-0 w-100 d-flex">
                <button class="btn btn-primary doc-btn m-auto" @click="showMoreDoc()">{{ buttonTxt }}</button>
            </div>
        </section>

        <!-- THEY TALK ABOUT US Section -->
        <HomeTalkAboutUs />
        
        <!--Why BDoctor Section -->
        <HomeWhyBdoc />

</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
// @use '../styles/partials/variables' as *;

section#best-doctor {
    background-color: $light-pro-color;
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
    background: linear-gradient(0deg, #ffffff 32%, #ffffffdd 65%, #ffffff00 100%);
    margin-top: v-bind(marginButton);

    button {
        transform: translateY(v-bind(translate));
    }
}
</style>
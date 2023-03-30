<script>
import { store } from '../store';
import DoctorsSideBar from '../components/Doctors/DoctorsSideBar.vue';
import DoctorCard from '../components/Doctors/DoctorCard.vue';

export default {
    name: 'AppDoctor',
    components: { DoctorsSideBar, DoctorCard },
    data() {
        return {
            store,
        }
    },
    methods: {

    },
    created() {
        this.store.getDataApi('doctors', store.specializationSelected);
    },
}
</script>

<template>
    <main>
        <section id="doctor-list">

            <!-- TO DO: REMOVE ALL v-if "doc.profile != null" AFTER FIX THE BUGS ON BACK-END -->
            <div class="container-fluid">
                <h1 class="pb-4 text-light"><span class="text-uppercase">{{ (store.specializationSelected != '') ?
                    store.specializationSelected : 'All Doctors' }}</span> in New
                    York</h1>
                <div class="row">
                    <div class="col-12 col-xl-2 mb-5">
                        <!-- Import Side Bar -->
                        <DoctorsSideBar :results="store.doctorList.total" />
                    </div>


                    <div class="col-12 col-xl-10">
                        <div class="row g-4">
                            <!-- DOCTORS CARD -->
                            <div class="col-12 col-lg-6" v-for="doc in store.doctorList.data"
                                v-if="store.doctorList.total > 0">
                                <!-- Import Doctor Card -->
                                <DoctorCard :doc="doc" />
                            </div>

                            <p v-else class="text-white fs-3 text-center">No results</p>
                            <!-- END DOCTORS CARD -->
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

main {
    min-height: 100vh;
    // background-color: #edeff2;
    background: $light-doc-color;
    background: linear-gradient(0deg, $light-doc-color 0%, $light-doc-color 47%, $light-pro-color 99%, $light-pro-color 100%);
}

section#doctor-list {
    padding: 50px 0;
}

div.doctors-container {
    max-width: 1700px;
    margin: 0 auto;
}

div.doctor-card {
    min-height: 300px;
    border-radius: 2rem;
    padding: 2rem;
    background-color: white;

    img {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        border: 2px solid $main-doc-color;
    }

    a {
        color: black;
        text-decoration: none;

        h3 {
            border-bottom: 2px solid transparent;
            transition: all .2s;

            &:hover {
                border-bottom: 2px solid black;
            }
        }

    }

}
</style>
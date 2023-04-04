<script>
import { store } from '../store';
import DoctorsSideBar from '../components/Doctors/DoctorsSideBar.vue';
import DoctorCard from '../components/Doctors/DoctorCard.vue';
import AppLoader from '../components/AppLoader.vue';

export default {
    name: 'AppDoctor',
    components: { DoctorsSideBar, DoctorCard, AppLoader },
    data() {
        return {
            store,
            page: 1
        }
    },
    methods: {
        prevPage() {
            if (this.store.doctorList.prev_page_url) {
                this.page--
                if (!this.store.doctorList.last_page == this.page) {
                    this.page++
                }
            }
            this.getPage();
        },
        nextPage() {
            if (this.store.doctorList.next_page_url) {
                this.page++
                if (this.store.doctorList.last_page != this.page) {
                    this.page--
                }
            }
            this.getPage();
        },
        getPage() {
            this.store.getDataApi('doctors', {
                params: {
                    specializations: this.store.specializationSelected,
                    page: this.page,
                    sortByAvg: 0,
                    sortByCount: 0,
                }
            });
        }
    },
    created() {
        if (this.store.specializationSelected != '') {
            this.store.getDataApi('doctors', {
                params: {
                    specializations: this.store.specializationSelected,
                }
            });
        }
    },
}
</script>

<template>
    <section id="doctor-list">

        <!-- TO DO: REMOVE ALL v-if "doc.profile != null" AFTER FIX THE BUGS ON BACK-END -->
        <div class="container">
            <h1 class="pb-4 text-light text-uppercase fw-bold">
                {{ (store.specializationSelected != '') ? store.specializationSelected : 'Select a Specilization' }}
            </h1>
            <div class="row g-3">
                <div class="col-12 col-xl-3">
                    <!-- Import Side Bar -->
                    <DoctorsSideBar :results="store.doctorList.total" />
                </div>
                <div class="col-12 col-xl-9">
                    <div class="row g-3">
                        <!-- DOCTORS CARD -->
                        <div class="col-12 col-lg-6" v-for="doc in store.doctorList.data"
                            v-if="store.doctorList.length != 0">
                            <!-- Import Doctor Card -->
                            <DoctorCard :doc="doc" />
                        </div>

                        <div class="col-12" v-else>
                            <p class="text-white fs-3 text-center w-100 bg-danger">No results</p>
                        </div>
                        <!-- END DOCTORS CARD -->

                        <div class="col-12">
                            <!-- Slider -->
                            <nav aria-label="Page navigation example" class="d-flex justify-content-center"
                                v-if="store.doctorList.length != 0">
                                <ul class="pagination">
                                    <li class="page-item">
                                        <button class="page-link" @click="prevPage()" aria-label="Prev">
                                            <span aria-hidden="true" class="fs-3"
                                                :class="(!store.doctorList.prev_page_url) ? 'pagination-disable' : 'fw-bold'">&laquo;</span>
                                        </button>
                                    </li>
                                    <li class="page-item"><span class="page-link fs-3 px-3">{{ store.doctorList.current_page
                                    }}</span>
                                    </li>
                                    <li class="page-item">
                                        <button class="page-link" @click="nextPage()" aria-label="Next">
                                            <span aria-hidden=" true" class="fs-3"
                                                :class="(!store.doctorList.next_page_url) ? 'pagination-disable' : 'fw-bold'">&raquo;</span>
                                        </button>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

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

.pagination-disable {
    color: gray;
}
</style>
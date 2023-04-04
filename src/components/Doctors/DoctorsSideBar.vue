<script>
import { store } from '../../store';

export default {
    name: 'DoctorSideBar',
    props: ['results'],
    data() {
        return {
            store,
            specializationSelected: '',
            sortByAvg: false,
            sortByCount: false,
        }
    },
    methods: {
        reSearch() {
            this.store.specializationSelected = this.specializationSelected;
            this.store.getDataApi('doctors', {
                params:{
                    specializations :this.store.specializationSelected,
                    page:1,
                    sortByAvg: (this.sortByAvg) ? 1 : 0,
                    sortByCount: (this.sortByCount) ? 1 : 0,
                }
            });
        },
    },
    created() {
        this.store.getDataApi('specializations');
    }
}
</script>

<template>
    <section id="side-bar" class="rounded-5 p-4">
        <!-- Search -->
        <div class="row">
            <div class="col-12 col-sm-5 col-md-4 col-lg-3 col-xl-12">
                <div class="mb-4 mb-sm-0 mb-xl-4 d-flex flex-column justify-content-between">        
                    <h2 class="mb-2">Search:</h2>
                    <div class="pt-sm-3 pt-xl-0 search-contains">
                        <div class="row g-3">
                            <div class="col-9">
                                <select name="search" id="search" v-model="specializationSelected">
                                    <option value="" disabled> -- Select -- </option>
                                    <option v-for="specialization in store.specializationList" :value="specialization.name">
                                        {{ specialization.name.toUpperCase() }}
                                    </option>
                                </select>
                            </div>
                            <div class="col-3 d-flex justify-content-sm-end">
                                <div class="btn doc-btn search-btn d-flex" @click="reSearch()">
                                    <div class="d-flex align-items-center m-auto">
                                        <i class="fa-solid fa-magnifying-glass"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <!-- Filters -->
            <div class="col-12 col-sm-5 col-md-6 col-lg-7 col-xl-12">
                <h2 class="mb-2">Order By:</h2>
                <!-- Order by Svg -->
                <div class="checkbox-wrapper-33 mb-2">
                    <label for="review" class="checkbox">
                        <input type="checkbox" class="checkbox__trigger visuallyhidden" id="review" v-model="sortByAvg">
                        <span class="checkbox__symbol">
                            <svg aria-hidden="true" class="icon-checkbox" width="28px" height="28px" viewBox="0 0 28 28"
                                version="1" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 14l8 7L24 7"></path>
                            </svg>
                        </span>
                        <p class="checkbox__textwrapper">Best doctors</p>
                    </label>
                </div>
                <!-- Order by Count (on click send the opposite value of the checkbox, because it change the value after the api call)-->
                <div class="checkbox-wrapper-33">
                    <label for="review-count" class="checkbox">
                        <input type="checkbox" class="checkbox__trigger visuallyhidden" id="review-count" v-model="sortByCount">
                        <span class="checkbox__symbol">
                            <svg aria-hidden="true" class="icon-checkbox" width="28px" height="28px" viewBox="0 0 28 28"
                                version="1" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 14l8 7L24 7"></path>
                            </svg>
                        </span>
                        <p class="checkbox__textwrapper">Number of reviews</p>
                    </label>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section#side-bar {
    width: 100%;
    background-color: white;

    select{
        width: 100% !important;
    }
}

h2 {
    font-weight: 200;
}

ul {
    list-style-type: none;
}
</style>
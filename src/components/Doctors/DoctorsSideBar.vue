<script>
import { store } from '../../store';

export default {
    name: 'DoctorSideBar',
    props: ['results'],
    data() {
        return {
            store,
            specializationSelected: '',
            checkedNames: '',
            sortByAvg: false,
            // sortByCount: false,
        }
    },
    methods: {
        reSearch() {
            this.sortByAvg = 0;
            this.sortByCount = 0;
            this.store.specializationSelected = this.specializationSelected;
            this.store.getDataApi('doctors', this.store.specializationSelected, this.sortByAvg);
        },

        setApiFilters() {
            let getAvg;
            if (!this.sortByAvg) {
                getAvg = '1'
            } else {
                getAvg = '0'
            }

            this.store.getDataApi('doctors', this.store.specializationSelected, getAvg);
        }
    },
    created() {
        this.store.getDataApi('specializations');
        this.specializationSelected = this.store.specializationSelected;
    }
}
</script>

<template>
    <section id="side-bar" class="w-100">
        <!-- Search -->
        <h2>Search:</h2>
        <div class="search-contains w-100">
            <select name="search" id="search" v-model="specializationSelected">
                <option value="" disabled> -- Select -- </option>
                <option v-for="specialization in store.specializationList" :value="specialization.name" selected>
                    {{ specialization.name.toUpperCase() }}</option>
            </select>
            <div class="btn btn-primary doc-btn search-btn position-relative ms-2" @click="reSearch()">
                <i class="fa-solid fa-magnifying-glass position-absolute"></i>
            </div>
        </div>

        <!-- Filters -->
        <div class="my-4">

            <h2>Order By:</h2>
            <!-- Order by Svg -->
            <input type="checkbox" id="review" v-model="sortByAvg" @click="setApiFilters()">
            <label for="review" class="ms-2">Review</label>
            <br>
            <!-- Order by Count TO DO FIX -->
            <!-- <input type="checkbox" id="review-count" value="1" v-model="sortByCount" @click="setApiFilters()">
                            <label for="review-count" class="ms-2">Number of review - {{ sortByCount }}</label> -->
        </div>
    </section>
</template>

<style lang="scss" scoped>
section#side-bar {
    width: 100%;
    background-color: white;
    padding: 1rem;
}

h2 {
    font-weight: 200;
}

ul {
    list-style-type: none;
}
</style>
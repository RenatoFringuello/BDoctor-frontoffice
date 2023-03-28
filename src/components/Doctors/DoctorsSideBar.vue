<script>
import { store } from '../../store';

export default {
    name: 'DoctorSideBar',
    props: ['results'],
    data() {
        return {
            store,
            specializationSelected: '',
        }
    },
    methods: {
        reSearch() {
            this.store.specializationSelected = this.specializationSelected;
            this.store.getDataApi('doctors', this.store.specializationSelected);
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

        <p class="mt-1">There are <span class="fw-bold text-center">{{ results }}</span> results</p>
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
</style>
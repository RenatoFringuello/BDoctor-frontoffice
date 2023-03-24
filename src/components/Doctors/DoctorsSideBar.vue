<script>
import { store } from '../../store';

export default {
    name: 'DoctorSideBar',
    props: ['results'],
    data() {
        return {
            store
        }
    },
    methods: {

    },
    created() {
        this.store.getDataApi('specializations');
    }
}
</script>

<template>
    <section id="side-bar" class="w-100">
        <section id="search-bar">
            <h2>Search:</h2>
            <div class="search-contains w-100">
                <select name="search" id="search">
                    <option v-for="specilization in store.specializationList" :value="specilization.name">
                        {{ specilization.name.toUpperCase() }}</option>
                </select>
                <div class="btn btn-primary doc-btn search-btn position-relative ms-2">
                    <i class="fa-solid fa-magnifying-glass position-absolute"></i>
                </div>
            </div>

            <p>There are <span class="fw-bold text-center">{{ results }}</span> results</p>
        </section>
    </section>
</template>

<style lang="scss" scoped>
section#side-bar {
    width: 100%;
    height: 100%;
    background-color: white;
    padding: 1rem;
}

h2 {
    font-weight: 200;
}
</style>
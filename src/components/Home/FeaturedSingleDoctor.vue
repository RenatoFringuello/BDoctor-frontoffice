<script>
export default {
    name: 'HomeBestDoctors',
    props: ['title']
}
</script>

<template>
    <section id="cardiology" class="my-5">
        <div class="container">
            <h3>
                {{ title }}
            </h3>
        </div>
        <div class="container">
            <!-- Sm -->
            <div class="row scroll-row pb-2 d-flex d-xl-none flex-nowrap">
                <div class="col-5" v-for="index in 8 ">
                    <div class=" doctor-card">

                    </div>
                </div>
            </div>
            <!-- Lg -->
            <div class="row scroll-row g-3 pb-2 d-none d-xl-flex justify-content-center">
                <div class="col-3" v-for="index in 8 ">
                    <div class=" doctor-card">

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

h3 {
    font-weight: 200;
}

.row {
    overflow-x: auto;
}


div.doctor-card {
    // width: 300px;
    height: 150px;
    border: 1px solid $main-doc-color;
}
</style>
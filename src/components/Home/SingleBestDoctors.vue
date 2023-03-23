<script>
export default {
    name: 'HomeBestDoctors',
}
</script>

<template>
    <section id="cardiology" class="my-5">
        <div class="container">
            <h3>
                Cardiology
            </h3>
        </div>
        <div class="container">
            <!-- Sm -->
            <div class="row scroll-row pb-2 d-flex d-lg-none flex-nowrap">
                <div class="doctor-card mx-2" v-for="index in 8">

                </div>
            </div>
            <!-- Lg -->
            <div class="row scroll-row pb-2 d-none d-lg-flex justify-content-center">
                <div class="doctor-card m-2 " v-for="index in 8">

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
    width: 300px;
    height: 150px;
    border: 1px solid $main-doc-color;
}
</style>
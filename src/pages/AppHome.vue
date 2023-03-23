<script>
import HomeJumbo from '../components/Home/HomeJumbo.vue';
import SingleBestDoctors from '../components/Home/SingleBestDoctors.vue';

export default {
    name: 'AppHome',
    components: { HomeJumbo, SingleBestDoctors }
}
</script>

<template>
    <main>
        <HomeJumbo />

        <section id="best-doctor">
            <h2 class="text-center text-uppercase fw-bold mt-5">Best Doctors</h2>
            <!-- To do: Generare i vari campi e i vari medici in modo dinamico -->
            <SingleBestDoctors />
            <SingleBestDoctors />
            <SingleBestDoctors />

        </section>

    </main>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
</style>
<script>
import HomeJumbo from '../components/Home/HomeJumbo.vue';

export default {
    name: 'AppHome',
    components: { HomeJumbo }
}
</script>

<template>
    <main>
        <HomeJumbo />
        <h1 class="text-danger fw-bold">Hello World</h1>
    </main>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
</style>
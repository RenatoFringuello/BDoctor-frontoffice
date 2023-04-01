<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: { AppHeader, AppFooter },
}
</script>

<template>
  <AppHeader />

  <main class="bg-main-gradient">
    <router-view></router-view>
  </main>

  <AppFooter />
</template>

<style lang="scss">
@use './styles/general.scss' as *;

main {
    min-height: 100vh;
    padding-bottom:100px;
}
</style>

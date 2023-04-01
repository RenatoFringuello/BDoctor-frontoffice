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

  <main>
    <router-view></router-view>
  </main>

  <AppFooter />
</template>

<style lang="scss">
@use './styles/general.scss' as *;

main {
    min-height: 100vh;
    background: $light-doc-color;
    background: linear-gradient(0deg, $light-doc-color 0%, $light-doc-color 47%, $light-pro-color 99%, $light-pro-color 100%);
    padding-bottom:100px;
}
</style>

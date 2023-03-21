<script>
export default {
  name: 'App'
}
</script>

<template>
  <h1 class="text-danger fw-bold">
    Route:
  </h1>
  <router-view></router-view>
</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use './styles/variables' as *;
</style>

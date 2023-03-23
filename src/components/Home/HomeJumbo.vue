<script>
import { store } from '../../store.js';

export default {
    name: 'HomeJumbo',
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <section id="jumbo">

    </section>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

section#jumbo {
    padding-top: 100px;


    width: 100%;
    height: 750px;

    background: #19b2b5;
    background: linear-gradient(0deg, #19b2b5 0%, #19b2b5 47%, #0c77aa 99%, #0c77aa 100%);
    background-size: cover;
    background-repeat: no-repeat;
}
</style>
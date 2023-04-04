<script>
    export default{
        name:'AppLoader',
        props:{
            color:String,
        }
    }
</script>

<template>
    <div class="d-flex vh-100">
        <div class="spinner m-auto" :class="color"></div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
    .spinner {
        width: 56px;
        height: 56px;
        border-radius: 50%;
        mask: radial-gradient(farthest-side,#0000 calc(100% - 9px),#000 0);
        -webkit-mask: radial-gradient(farthest-side,#0000 calc(100% - 9px),#000 0);
        animation: spinner-c7wet2 1s infinite linear;
        
        background: radial-gradient(farthest-side,$light-pro-color 94%,#0000) top/9px 9px no-repeat,
        conic-gradient(#0000 30%,$light-pro-color);

        &.white{
            background: radial-gradient(farthest-side,white 94%,#0000) top/9px 9px no-repeat,
            conic-gradient(#0000 30%,white) !important;
        }
    }

    @keyframes spinner-c7wet2 {
        100% {
            transform: rotate(1turn);
        }
    }
</style>
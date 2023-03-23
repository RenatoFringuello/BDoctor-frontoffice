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
    <section id="jumbo" class="d-flex position-relative">
        <img :src="store.getImgPath('doctors-jumbo2', 'png')" alt="Doctors"
            class="d-none d-md-block position-absolute bottom-0 end-0">
        <div class="container m-auto jumbo-area">
            <h1 class="text-uppercase text-light fw-bold">Find a doctor now!</h1>
            <p class="text-uppercase">Search among 200.000 doctors.</p>

            <div class="search-bar mt-5 d-flex align-items-center">
                <div class="search-contains w-100">
                    <span class="align-middle">Search a</span>
                    <select name="search" id="search">
                        <option value="boh">Boh</option>
                        <option value="boh">Boh2</option>
                        <option value="boh">Boh3</option>
                    </select>
                    <span class="align-middle">to<span class="fw-bold">New York</span>
                    </span>
                    <div class="btn btn-primary doc-btn search-btn position-relative">
                        <i class="fa-solid fa-magnifying-glass position-absolute"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

section#jumbo {
    width: 100%;
    min-height: 750px;

    background: $light-doc-color;
    background: linear-gradient(0deg, $light-doc-color 0%, $light-doc-color 47%, $light-pro-color 99%, $light-pro-color 100%);
    background-size: cover;
    background-repeat: no-repeat;

    img {
        width: 600px;
        margin-right: 200px;
    }

    h1 {
        font-size: 4.5rem;
    }

    p {
        font-size: 2rem;
        font-weight: 200;
    }
}

div.jumbo-area {
    z-index: 2;

    div.search-bar {
        width: max-content;
        padding: .7rem;
        background-color: white;
        border-radius: 2rem;
    }
}

div.search-contains {
    span {
        font-size: 1.5rem;
        margin: 0 .5rem;
        text-transform: uppercase;
    }

    select {
        width: 150px;
        height: 40px;
        border: 0;
        outline: none;
        background-color: white;
        border: 1px solid $light-doc-color;
        border-radius: 2rem;
        padding: .2rem .8rem;
        text-align: center;
        vertical-align: middle;
    }

    div.search-btn {
        width: 50px;
        height: 50px;
        border-radius: 50%;

        i {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
}

@media screen and (max-width:600px) {
    div.jumbo-area {
        div.search-bar {
            width: 100%;
        }
    }
}
</style>
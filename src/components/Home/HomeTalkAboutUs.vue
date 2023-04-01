<script>
import { store } from '../../store';

export default {
    name: 'HomeTalkAboutUs',
    data() {
        return {
            store,
            newsList: ['1', '2', '8', '3', '4', '5', '6', '7', 'B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7'],
            getScroll: 1,
            speed: 1,
            scollX: '0px',
        }
    },
    methods: {
        autoScrollX() {
            setInterval(() => {
                if (this.getScroll > 6000 * 2) {
                    this.getScroll = 0
                }
                this.getScroll = this.getScroll + this.speed;
                // console.log(this.getScroll)

                this.scollX = '-' + this.getScroll + 'px';
                // console.log(this.scollX)
            }, 1);
        },
    },
    mounted() {
        this.autoScrollX()
    },
}
</script>

<template>
    <section id="talk-about-us">
        <div class="container-fluid">
            <div class="row">
                <h2 class="section-title">They talk about us</h2>
            </div>
        </div>
        <div class="scroll-news ">
            <div class="scroll d-flex">
                <img v-for="newsImg in newsList" :src="store.getNewsImgPath(newsImg, 'png')" alt="News Logo">
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section#talk-about-us {
    margin: 100px 0;
}

div.scroll-news {
    overflow: hidden;

    div.scroll {
        padding-left: 100%;
        transform: translateX(v-bind(scollX));
    }

    img {
        width: 500px;
        height: 300px;
        object-fit: contain;
        margin-left: 100px;
    }
}
</style>
<script>
import { store } from '../store';

export default {
    name: 'AppFooter',
    data() {
        return {
            store,
            socialList: [
                {
                    url: '#',
                    path: 'fa-instagram',
                },
                {
                    url: '#',
                    path: 'fa-facebook',
                },
                {
                    url: '#',
                    path: 'fa-twitter',
                },
            ],
            footerMenu: [
                {
                    title: 'Team 6',
                    list: [
                        {
                            name : 'Alessio De Angelis',
                            href : 'https://github.com/DeAngelisDev16'
                        }, 
                        {
                            name : 'Roberto Carta Mantiglia',
                            href : 'https://github.com/RobertoCartaMantiglia'
                        }, 
                        {
                            name : 'Renato Fringuello',
                            href : 'https://github.com/RenatoFringuello'
                        }, 
                        {
                            name : 'Claudio Emmolo',
                            href : 'https://github.com/Claudio-Emmolo'
                        }
                    ]
                },
                {
                    title: 'Bool Teach',
                    list: [
                        {
                            name : 'Riccardo Petricca',
                            href : '#'
                        },
                        {
                            name : 'Luigi Micco',
                            href : 'https://github.com/luigimicco'
                        },
                        {
                            name : 'Stefano Cappellini',
                            href : 'https://github.com/StefanoCappellini'
                        }
                    ]
                },
                {
                    title: 'Policy',
                    list: [
                        {
                            name : 'Notes',
                            href : '#'
                        },
                        {
                            name : 'Policy',
                            href : '#'
                        },
                        {
                            name : 'Cookies',
                            href : '#'
                        },
                        {
                            name : 'Help',
                            href : '#'
                        },
                        {
                            name : 'Teams',
                            href : '#'
                        },
                    ]
                },
            ]
        }
    },
}
</script>

<template>
    <footer class="position-relative">
        <div class="wave-shape">
            <img :src="store.getImgPath('bottom-shape', 'png')" alt="">
        </div>
        <div class="container h-100">

            <!-- Top footer -->
            <section id="top-footer">
                <div class="row h-100">
                    <div class="col-12 col-md-6">
                        <img :src="store.getImgPath('B-Doc-Logo', 'png')" alt="BDoctor Logo" class="mb-3">
                        <p class="w-100">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, aspernatur totam?
                            Amet inventore eos possimus quis hic nulla debitis provident eveniet tempore sunt quod
                            ducimus itaque nesciunt dolores, excepturi saepe?
                        </p>

                    </div>
                    <div class="col-12 col-md-6 d-flex align-items-center">
                        <div class="row w-100 d-flex justify-content-around ps-md-5">
                            <div class="col-12 col-md-4 mb-3 mb-md-0" v-for="menu in footerMenu">
                                <div class="list-item">
                                    <h4>{{ menu.title }}</h4>
                                    <ul>
                                        <li v-for="list in menu.list">
                                            <a :href="list.href">
                                                {{ list.name }}
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div class="separator"></div>

            <!-- Bottom footer -->
            <section id="bottom-footer">
                <div class="row h-100">
                    <div
                        class="col-12 col-md-6 d-flex align-items-center mb-3 justify-content-center justify-content-md-start">
                        <p class="text-center m-0 text-light">&copy;2023 - BDoctor | Design by
                            <span class="box-lime">Lime</span><span class="box-magenta">Magenta</span> Company
                        </p>
                    </div>
                    <div class="col-12 col-md-6 d-flex align-items-center justify-content-center justify-content-md-end">
                        <a href="#" v-for="social in socialList">
                            <i :class="social.path" class="fa-brands fs-3 text-light me-3"></i>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;

footer {
    background-color: $main-doc-color;

    section {
        padding: 3rem 0;
    }
}

div.wave-shape img {
    width: 100%;
    height: 50px;
    transform: translateY(-100%);
}


section#top-footer {
    img {
        width: 100px;
        background-color: white;
        border-radius: 100%;
        padding: .5rem;
    }

    p {
        font-size: 1rem;
        font-weight: 200;
        color: white;
    }

    div.list-item {
        color: white;

        h4 {
            font-weight: bold;
        }

        ul {
            padding: 0;
            margin: 0;

            li {
                list-style-type: none;
                font-size: 0.9rem;
                font-weight: 200;
                margin-bottom: .2rem;

                a {
                    text-decoration: none;
                    color: white;
                    border-bottom: 1px solid transparent;


                    &:hover {
                        border-bottom: 1px solid white;
                    }
                }
            }
        }
    }
}

.box-lime {
    background-color: lime;
}

.box-magenta {
    background-color: magenta;
}

.box-lime,
.box-magenta {
    color: black;
    padding: .2rem;
}
</style>
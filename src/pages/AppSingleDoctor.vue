<script>
import { store } from '../store';
import { useRoute } from 'vue-router';
import axios, { all } from 'axios';



import DoctorsReview from '../components/Doctors/DoctorsReview.vue';
import DoctorsMessage from '../components/Doctors/DoctorsMessage.vue';

export default {
    name: 'AppSingleDoctor',
    components: {
        DoctorsReview,
        DoctorsMessage,
    },
    data() {
        return {
            store,
            doctorData: [],
        }
    },
    methods: {
        getSingleDoctor() {
            const route = useRoute();

            axios.get(`http://127.0.0.1:8000/api/doctors/${route.params.id}`, {
            })
                .then((response) => {
                    this.doctorData = response.data.results;
                    // console.log(response.data.results); //To remove
                })
                .catch(function (error) {
                    console.log(error);
                })
        },
    },
    created() {
        this.getSingleDoctor();
    },
}
</script>
<template>
    <main class="py-5">
        <div class="container">
            <div class="row g-3">
                <!-- Info Doctor -->
                <div class="col-12 col-lg-8 box-elements">
                    <section id="doctor-info">
                        <div class="row">
                            <!-- Profile Pictures -->
                            <div class="col-12 col-xl-4">
                                <img v-if="doctorData.profile.picture.startsWith('placeholder')"
                                    :src="`http://127.0.0.1:8000/storage/${doctorData.profile.picture}`"
                                    :alt="doctorData.profile.picture">
                                <img v-else :src="doctorData.profile.picture">
                            </div>
                            <!-- Name and lastname -->
                            <div class="col-12 col-xl-8 ps-5 d-flex justify-content-center flex-column">
                                <h1 class="mb-2">Dott. {{ doctorData.name }} {{ doctorData.lastname }}</h1>
                                <p class="specializations">
                                    <span class="text-uppercase mb-5"
                                        v-for="specialization in doctorData.profile.specializations">{{
                                            specialization.name
                                        }} - </span>
                                </p>
                                <div class="star-review mt-2">
                                    <!-- Generate stars -->
                                    <div class="d-flex align-items-center">
                                        <div v-for="star in store.getStars(doctorData.reviews_avg_rating)" class="star"
                                            :class="(star === 0.5) ? 'half' : (star === 0) ? 'disabled' : ''"></div>
                                        <span>({{ doctorData.reviews_avg_rating / 2 }})</span>
                                    </div>
                                </div>


                            </div>

                            <div class="separator my-5 w-50"></div>

                            <div class="col-12">
                                <!-- Contact Info -->
                                <div class="contact-info mb-5">
                                    <p class="text-uppercase">Contact info</p>
                                    <ul>
                                        <li>
                                            <i class="fa-solid fa-envelope me-3"></i>
                                            <span>{{ doctorData.email }}</span>
                                        </li>
                                        <li>
                                            <i class="fa-solid fa-phone me-3"></i>
                                            <span v-if="doctorData.profile.telephone">{{ doctorData.profile.telephone
                                            }}</span>
                                            <span v-else> - - - </span>
                                        </li>
                                        <li>
                                            <i class="fa-solid fa-location-dot me-3"></i>
                                            <span>{{ doctorData.profile.address }}</span>
                                        </li>
                                    </ul>
                                </div>

                                <!-- Bio -->
                                <p class="border p-2">
                                    <span class="fw-bold">Bio:</span>
                                    <br>
                                    <span v-if="doctorData.profile.bio">
                                        {{ doctorData.profile.bio }}
                                    </span>
                                    <span v-else> - - - </span>
                                </p>

                                <!-- Services -->
                                <p class="border p-2">
                                    <span class="fw-bold">My services:</span>
                                    <br>
                                    <span v-if="doctorData.profile.services">
                                        {{ doctorData.profile.services }}
                                    </span>
                                    <span v-else> - - - </span>

                                </p>

                            </div>
                        </div>
                    </section>

                    <div class="separator my-5 w-50"></div>

                    <section id="review" class="mb-5">
                        <h2 class="text-center text-uppercase">
                            <i class="fa-solid fa-star"></i>
                            <span class="mx-3">Reviews</span>
                            <i class="fa-solid fa-star"></i>
                        </h2>

                        <div class="row g-3 mt-5">
                            <!-- Generate Reviews -->
                            <div class="col-12" v-for="review in doctorData.reviews">

                                <div class="review-box border p-2">
                                    <h3>
                                        {{ review.name }} {{ review.lastname }}
                                    </h3>
                                    <pre class="fw-bold">{{ review.email }}</pre>
                                    <!-- Generate stars -->
                                    <div class="d-flex mb-3">
                                        <div v-for="star in store.getStars(review.rating)" class="star"
                                            :class="(star === 0.5) ? 'half' : (star === 0) ? 'disabled' : ''"></div>
                                        <span>({{ review.rating / 2 }})</span>
                                    </div>
                                    <p>
                                        {{ review.content }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <!-- Send Message or Review -->
                <div class="col-12 col-lg-4">
                    <div class="box-elements p-5">
                        <div class="box-form">
                            <h3> Send Message</h3>
                            <DoctorsMessage />
                        </div>
                        <hr>
                        <div class="box-form">
                            <h3>Send Review</h3>
                            <DoctorsReview />
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </main>
</template>
<style lang="scss" scoped>
@use '../styles/general.scss' as *;

main {
    min-height: 100vh;
    background: $light-doc-color;
    background: linear-gradient(0deg, $light-doc-color 0%, $light-doc-color 47%, $light-pro-color 99%, $light-pro-color 100%);
}

.box-elements {
    background-color: white;
}


// BOX FORMS

div.box-form {
    margin-bottom: 5rem;

    h3 {
        margin-bottom: 1rem;
        text-align: center;
    }
}

section#doctor-info {
    padding: 1rem;
    margin-bottom: 150px;

    img {
        width: 280px;
        height: 280px;
        border-radius: 50%;
        border: 10px solid $main-doc-color;

    }

    span {
        font-weight: 200;
    }

    div.contact-info {
        p {
            font-size: 1.5rem;
        }

        ul {
            list-style-type: none;

            li {
                font-size: 1.2rem;
                margin-bottom: .8rem;
            }
        }
    }
}
</style>
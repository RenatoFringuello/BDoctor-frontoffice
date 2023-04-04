<script>
import { store } from '../../store';

export default {
    name: 'DoctorCard',
    props: ['doc'],
    data() {
        return {
            store,
        }
    },
}
</script>
<template>
    <div class="doctor-card p-4 rounded-5 position-relative d-flex flex-column justify-content-between h-100"
        :class="(doc.sponsors != null && doc.sponsors[0].type != 'noSponsor') ? 'pro-doctor-card' : ''">

        <div>
            <div class="doctor-card-head mb-3 d-flex align-items-center position-relative"
                :class="(doc.sponsors != null && doc.sponsors[0].type != 'noSponsor') ? 'pro-user' : ''">
                <img class="h-100" v-if="doc.profile != null && doc.profile.picture.startsWith('placeholder')"
                    :src="`http://127.0.0.1:8000/storage/${doc.profile.picture}`" :alt="doc.profile.picture">
                <img v-else-if="doc.profile != null" :src="doc.profile.picture">
                <div class="doctor info h-100 ms-3">

                    <!-- Go to single doctor page -->
                    <router-link class="ms-4" :to="{ name: 'doctor-page', params: { id: doc.id } }"
                        @click="store.singleDocClicked = doc">
                        <h3>Dr. {{ doc.name + ' ' + doc.lastname }}</h3>
                    </router-link>

                    <!-- Generate stars -->
                    <div class="d-flex">
                        <div v-for="star in store.getStars(doc.reviews_avg_rating)" class="star"
                            :class="(star === 0.5) ? 'half' : (star === 0) ? 'disabled' : ''"></div>
                        <span>({{ doc.reviews_count }})</span>
                    </div>
                </div>

                <!-- pro badge -->
                <div class="position-absolute top-0 end-0 bg-warning sponsored-icon d-flex align-items-center"
                    v-if="doc.sponsors != null && doc.sponsors[0].type != 'noSponsor'">
                    <i class="fa-solid fa-certificate"></i>
                    <span class="ms-1 fw-bold text-uppercase">Pro</span>
                </div>
            </div>
            <p class="mb-3" v-if="doc.profile != null">
                {{ doc.profile.services.substring(0, 230) + '...' }}
            </p>
        </div>

        <!-- Contact -->
        <div class="doctor-card-body d-flex justify-content-between">
            <span v-if="doc.profile != null" class="text-uppercase me-3">
                <i class="fa-solid fa-location-dot"></i>
                {{ doc.profile.address }}
            </span>
            <span v-if="doc.profile != null" class="text-uppercase">
                <i class="fa-solid fa-phone"></i>
                {{ doc.profile.telephone }}
            </span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;


.pro-doctor-card {
    border: 2px solid $pro-user-color !important;
}

div.doctor-card {
    min-height: 300px;
    border: 2px solid $main-doc-color;
    background-color: white;


    .doctor-card-head {
        height: 120px;

        img {
            width: 120px;
            height: 120px;
            object-fit: cover;
            object-position: center;
            border-radius: 50%;
            border: 2px solid $main-doc-color;
        }
    }

    a {
        color: black;
        text-decoration: none;

        h3 {
            border-bottom: 2px solid transparent;
            transition: all .2s;

            &:hover {
                border-bottom: 2px solid black;
            }
        }

    }

    div.pro-user {
        img {
            width: 120px;
            height: 120px;
            object-fit: cover;
            object-position: center;
            border-radius: 50%;
            border: 2px solid $pro-user-color;
        }
    }

}

div.sponsored-icon {
    font-size: 1rem !important;
    padding: .2rem .5rem;
    border-radius: 3rem;
}


@media screen and (max-width: 480px) {
    div.doctor-card {
        padding: 1.2rem .8rem;

        img {
            width: 110px;
            height: 110px;
        }
    }
}
</style>
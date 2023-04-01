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
    <div class="doctor-card p-4 rounded-5 position-relative d-flex flex-column justify-content-between">
        <span class="text-warning fs-5 mb-2 ms-1 position-absolute top-0 end-0 me-3 mt-1"
            v-if="doc.sponsors != null && doc.sponsors[0].type != 'noSponsor'">FEATURED
        </span>
        <div class="doctor-card-head mb-3 d-flex align-items-center position-relative">
            <img class="h-100" v-if="doc.profile != null && doc.profile.picture.startsWith('placeholder')"
                :src="`http://127.0.0.1:8000/storage/${doc.profile.picture}`" :alt="doc.profile.picture">
            <img v-else-if="doc.profile != null" :src="doc.profile.picture">
            <div class="doctor info h-100 ms-3">

                <!-- Go to single doctor page -->
                <router-link class="ms-4" :to="{ name: 'doctor-page', params: { id: doc.id } }" @click="store.singleDocClicked = doc">
                    <h3>Dr. {{ doc.name + ' ' + doc.lastname }}</h3>
                </router-link>

                <!-- Generate stars -->
                <div class="d-flex">
                    <div v-for="star in store.getStars(doc.reviews_avg_rating)" class="star"
                        :class="(star === 0.5) ? 'half' : (star === 0) ? 'disabled' : ''"></div>
                    <span>({{ doc.reviews_count }})</span>
                </div>
            </div>
        </div>
        <p class="mb-3" v-if="doc.profile != null">
            {{ doc.profile.services.substring(0, 230) + '...' }}
        </p>
        <!-- Contact -->
        <div class="doctor-card-body">
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

div.doctor-card {
    min-height: 300px;
    border: 2px solid $main-doc-color;
    background-color: white;

    .doctor-card-head{
        height: 120px;
        img {
            width: 120px;
            height: 120px;
            object-fit: contain;
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


}

@media screen and (max-width: 480px) {
    div.doctor-card {
        padding: 1.2rem .9rem;
    }
}
</style>
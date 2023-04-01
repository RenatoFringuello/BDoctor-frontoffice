<script>
import DoctorCard from '../Doctors/DoctorCard.vue';
import { store } from '../../store';

export default {
    name: 'HomeBestDoctors',
    components: { DoctorCard },
    data() {
        return {
            store
        }
    },
    methods: {

    },
    created() {
        this.store.getDataApi('sponsored')
    }
}
</script>

<template>
    <section id="featured" class="my-5">
        <div class="container">
            <div class="row g-3">
                <div class="col-12 col-lg-6" v-for="docSponsored in store.doctorSponsored">
                    <DoctorCard :doc="docSponsored" />
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

</style>
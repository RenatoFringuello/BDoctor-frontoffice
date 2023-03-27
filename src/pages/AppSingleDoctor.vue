<script>
import DoctorsReview from '../components/Doctors/DoctorsReview.vue';
import DoctorsMessage from '../components/Doctors/DoctorsMessage.vue';

export default {
    name: 'AppSingleDoctor',
    components: {
        DoctorsReview,
        DoctorsMessage
    }
}
</script>
<template>
    <main class="py-5">
        <div class="container">
            <h1>Message</h1>
            <DoctorsMessage />
            <h1>Review</h1>
            <DoctorsReview />
        </div>

    </main>
</template>
<style lang="scss" scoped></style>
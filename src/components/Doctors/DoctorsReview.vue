<script>
import { useRoute } from 'vue-router';
import axios from 'axios';

export default {
    name: 'Doctorsreview',
    data() {
        return {
            email: '',
            name: '',
            lastname: '',
            content: '',
            rating: '',
            success: false,
            errors: {},
            route: useRoute() //For get ID
        }
    },
    methods: {
        sendReviewForm() {
            const formData = {
                user_id: this.route.params.id,
                email: this.email,
                name: this.name,
                lastname: this.lastname,
                content: this.content,
                rating: this.rating,
            }
            console.log(formData)
            axios.post('http://127.0.0.1:8000/api/review', formData)
                .then((response) => {
                    this.success = response.data.success;
                    if (this.success) {
                        this.user_id = '',
                            this.email = '',
                            this.name = '',
                            this.lastname = '',
                            this.content = '',
                            this.rating = '',
                            this.success = false
                    } else {
                        this.errors = response.data.errors;
                        console.log(this.errors)
                    }
                })

        }
    },

}
</script>
<template>
    <div class="mb-4 row">
        <div class="col-md-6">
            <label for="email" class="col-md-4">
                Email
            </label>
            <input v-model="email" id="email" type="email" class="form-control" name="email" autocomplete="email" autofocus
                minlength="9">
        </div>
        <div class="col-md-6">
            <label for="name" class="col-md-4">
                Name
            </label>
            <input v-model="name" id="name" type="text" class="form-control" name="telephone" autocomplete="name">
        </div>
        <div class="col-md-6">
            <label for="lastname" class="col-md-4">
                Lastname
            </label>
            <input v-model="lastname" id="lastname" type="text" class="form-control" name="lastname"
                autocomplete="lastname">
        </div>
        <div class="col-md-6">
            <label for="content" class="form-label">
                Content
            </label>
            <textarea v-model="content" class="form-control" name="content" id="content" rows="3"></textarea>
        </div>
        <div class="col-md-6">
            <label for="lastname" class="col-md-4">
                Rating from 0 to 10
            </label>
            <input v-model="rating" id="rating" type="number" class="form-control" name="rating" autocomplete="rating">
        </div>
    </div>
    <button @click="sendReviewForm()" class="btn btn-primary">Send Review</button>
</template>
<style lang="scss" scoped></style>
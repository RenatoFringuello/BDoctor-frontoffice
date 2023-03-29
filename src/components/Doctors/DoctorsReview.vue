<script>
import { useRoute } from 'vue-router';
import axios from 'axios';
import Swal from 'sweetalert2'


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
        showAlert() {
            // Use sweetalert2
            let timerInterval
            Swal.fire({
                title: 'Review has been sent!',
                icon: 'success',
                // html: 'I will close in <b></b> milliseconds.',
                timer: 1500,
                timerProgressBar: false,
                didOpen: () => {
                    Swal.showLoading()
                    const b = Swal.getHtmlContainer().querySelector('b')
                    timerInterval = setInterval(() => {
                        b.textContent = Swal.getTimerLeft()
                    }, 100)
                },
                willClose: () => {
                    clearInterval(timerInterval)
                }
            }).then((result) => {
                /* Read more about handling dismissals below */
                if (result.dismiss === Swal.DismissReason.timer) {
                    console.log('I was closed by the timer')
                }
            })
        },

        sendReviewForm(e) {
            e.preventDefault();

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
                        this.showAlert(),
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
    <section id="review">
        <form @submit.prevent="sendReviewForm" method="post">
            <div class="mb-4 row">
                <div class="col-12">
                    <label for="email" class="col-md-4">
                        Email
                    </label>
                    <input v-model="email" id="email" type="email" class="form-control" name="email" autocomplete="email"
                        :class="(this.errors.email) ? 'is-invalid' : ''" required minlength="2" maxlength="255">
                    <span v-if="this.errors.email" class="text-danger">{{ errors.email[0] }}</span>
                </div>
                <div class="col-12">
                    <label for="name" class="col-md-4">
                        Name
                    </label>
                    <input v-model="name" id="name" type="text" class="form-control" name="telephone" autocomplete="name"
                        :class="(this.errors.name) ? 'is-invalid' : ''" required minlength="2" maxlength="255">
                    <span v-if="this.errors.name" class="text-danger">{{ errors.name[0] }}</span>
                </div>
                <div class="col-12">
                    <label for="lastname" class="col-md-4">
                        Lastname
                    </label>
                    <input v-model="lastname" id="lastname" type="text" class="form-control" name="lastname"
                        autocomplete="lastname" :class="(this.errors.lastname) ? 'is-invalid' : ''" required minlength="2"
                        maxlength="255">
                    <span v-if="this.errors.lastname" class="text-danger">{{ errors.lastname[0] }}</span>
                </div>
                <div class="col-12">
                    <label for="content" class="form-label">
                        Content
                    </label>
                    <textarea v-model="content" class="form-control" name="content" id="content" rows="3"
                        :class="(this.errors.content) ? 'is-invalid' : ''" required minlength="2"
                        maxlength="1500"></textarea>
                    <span v-if="this.errors.content" class="text-danger">{{ errors.content[0] }}</span>
                </div>
                <div class="col-12">
                    <label for="lastname" class="form-label">
                        Rating from 0 to 10
                    </label>
                    <input v-model="rating" id="rating" type="number" class="form-control" name="rating"
                        autocomplete="rating" :class="(this.errors.rating) ? 'is-invalid' : ''" required min="0" max="10">
                    <span v-if="this.errors.rating" class="text-danger">{{ errors.rating[0] }}</span>
                </div>
            </div>
            <button @click="sendReviewForm()" class="btn btn-primary doc-btn mt-3">Send Review</button>
        </form>
    </section>
</template>
<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

/* inputs and textareas */
input,
textarea {
    border: 2px solid $main-doc-color !important;
    width: 100%;
    margin-bottom: 1rem;
}

input:focus,
textarea:focus {
    border: 2px solid $main-doc-color !important;
    box-shadow: $main-doc-color 0px 6px 12px -2px, #ffffff4d 0px 3px 7px -3px !important;
    outline: none !important;
}
</style>
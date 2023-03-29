<script>
import { useRoute } from 'vue-router';
import axios from 'axios';


export default {
    name: 'DoctorsMessage',
    data() {
        return {
            name: '',
            lastname: '',
            email: '',
            content: '',
            success: false,
            errors: {},
            route: useRoute() //For get ID

        }
    },
    methods: {
        sendMessageForm(e) {
            e.preventDefault();
            const formData = {
                name: this.name,
                lastname: this.lastname,
                email: this.email,
                content: this.content,
                user_id: this.route.params.id,
            }

            console.log(formData)
            axios.post('http://127.0.0.1:8000/api/message', formData)
                .then((response) => {
                    this.success = response.data.success;
                    if (this.success) {
                        this.user_id = '',
                            this.name = '',
                            this.lastname = '',
                            this.email = '',
                            this.content = '',
                            this.success = false,
                            this.errors = {}
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
    <section id="form-message">
        <form @submit.prevent="sendMessageForm" method="POST">
            <div class="mb-4 row">
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
                    <label for="email" class="col-md-4">
                        Email
                    </label>
                    <input v-model="email" id="email" type="email" class="form-control" name="email" autocomplete="email"
                        autofocus :class="(this.errors.email) ? 'is-invalid' : ''" required minlength="2" maxlength="255">
                    <span v-if="this.errors.email" class="text-danger">{{ errors.email[0] }}</span>

                </div>
                <div class="col-12">
                    <label for="content" class="form-label">
                        Content
                    </label>
                    <textarea v-model="content" class="form-control w-100" name="content" id="content" rows="3"
                        :class="(this.errors.content) ? 'is-invalid' : ''" required minlength="2"
                        maxlength="1500"></textarea>
                    <span v-if="this.errors.content" class="text-danger">{{ errors.content[0] }}</span>

                </div>
            </div>
            <button type="submit" class="btn btn-primary doc-btn mt-3" @click="sendMessageForm()">Send Message</button>
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
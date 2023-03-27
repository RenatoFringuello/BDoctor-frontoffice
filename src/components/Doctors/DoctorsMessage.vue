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
        sendMessageForm() {
            const formData = {
                user_id: this.route.params.id,
                name: this.name,
                lastname: this.lastname,
                email: this.email,
                content: this.content
            }

            axios.post('http://127.0.0.1:8000/api/message', formData)
                .then((response) => {
                    this.success = response.data.success;
                    if (this.success) {
                        this.user_id = '',
                            this.name = '',
                            this.lastname = '',
                            this.email = '',
                            this.content = '',
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
    <section id="form-review">
        <div class="mb-4 row">
            <div class="col-md-6">
                <label for="name" class="col-md-4">
                    Name
                </label>
                <input v-model="name" id="name" type="text" class="form-control" name="telephone" autocomplete="name"
                    required minlength="2" maxlength="255">
            </div>
            <div class="col-md-6">
                <label for="lastname" class="col-md-4">
                    Lastname
                </label>
                <input v-model="lastname" id="lastname" type="text" class="form-control" name="lastname"
                    autocomplete="lastname" required minlength="2" maxlength="255">
            </div>
            <div class="col-md-6">
                <label for="email" class="col-md-4" required minlength="2" maxlength="255">
                    Email
                </label>
                <input v-model="email" id="email" type="email" class="form-control" name="email" autocomplete="email"
                    autofocus minlength="9" required maxlength="255">
            </div>
            <div class="col-md-6">
                <label for="content" class="form-label">
                    Content
                </label>
                <textarea v-model="content" class="form-control" name="content" id="content" rows="3" required
                    minlength="10" maxlength="1000"></textarea>
            </div>
        </div>
        <button type="submit" class="btn btn-primary" @click="sendMessageForm()">Send Message</button>
    </section>
</template>
<style lang="scss" scoped></style>
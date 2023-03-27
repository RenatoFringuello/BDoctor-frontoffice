<script>
export default {
    name: 'DoctorsMessage'
}
</script>
<template>
    <form>
        <div class="mb-4 row">
            <div class="col-md-6">
                <label for="name" class="col-md-4">
                    Name
                </label>
                <input id="name" type="text" class="form-control" name="telephone" autocomplete="name">
            </div>
            <div class="col-md-6">
                <label for="lastname" class="col-md-4">
                    Lastname
                </label>
                <input id="lastname" type="text" class="form-control" name="lastname" autocomplete="lastname">
            </div>
            <div class="col-md-6">
                <label for="email" class="col-md-4">
                    Email
                </label>
                <input id="email" type="email" class="form-control" name="email" autocomplete="email" autofocus
                    minlength="9">
            </div>
            <div class="col-md-6">
                <label for="content" class="form-label">
                    Content
                </label>
                <textarea class="form-control" name="content" id="content" rows="3"></textarea>
            </div>
        </div>
        <button type="submit" class="btn btn-primary">Send Message</button>
    </form>
</template>
<style lang="scss" scoped></style>
<script>
export default {
    name: 'HomeWhyBdoc.',
    data() {
        return {
            whyList: [
                {
                    title: 'Our Doctors',
                    data: '+200K'
                },
                {
                    title: 'Our Patients',
                    data: '+10.000K'
                },
                {
                    title: 'Specializations',
                    data: '+30'
                },

            ]
        }
    },
}
</script>

<template>
    <section id="why-bdoc">
        <div class="container">
            <div class="row py-5">
                <h2 class="section-title">Why BDoctor?</h2>
                <div class="row gy-4 gy-lg-0 m-0">
                    <div class="col-12 col-lg-4" v-for="whyElement in whyList">
                        <div class="info-box d-flex justify-content-center align-items-center flex-column">
                            <h3 class="text-center mb-3">
                                {{ whyElement.title }}
                            </h3>
                            <p class="text-center m-0">
                                {{ whyElement.data }}
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../styles/general.scss' as *;


section#why-bdoc {
    padding: 40px 0;
    background-color: $light-doc-color;
    color: white;

    h2 {
        margin-bottom: 4rem;

    }
}

div.info-box {
    min-height: 300px;
    border: 1px solid white;
    border-radius: 1rem;
    padding: 2rem;

    h3 {
        font-weight: 200;
        font-size: 2rem;
    }

    p {
        font-size: 3.5rem;
        font-weight: 700;
        letter-spacing: .2rem;
    }
}
</style>
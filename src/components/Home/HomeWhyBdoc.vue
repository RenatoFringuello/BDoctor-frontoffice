<script>
import {store} from '../../store'
export default {
    name: 'HomeWhyBdoc.',
    data() {
        return {
            store,
            stats : [],
            whyList: [
                {
                    title:'Our Doctors',
                },
                {
                    title:'Our Patients',
                },
                {
                    title:'Specializations',
                }
            ]
        }
    },
    methods: {
        getFormat(num){
            const format = ['Bil', 'Mil', 'k'];
            // num *= 10000000;
            for (let i = 0; i < format.length; i++) {
                let range = Math.pow(1000, format.length - i);
                console.log(range);
                if( num >= range){
                    return `${num / range} ${format[i]}`;
                }
            }
            return (num < 100) ? (Math.floor(num/10) * 10) : (Math.floor(num/100) * 100);
        }
    },
    created(){
        this.store.getDataApi('stats');
    }
}
</script>

<template>
    <section id="why-bdoc">
        <div class="container">
            <div class="row gy-4 gy-lg-0 py-5">
                <h2 class="section-title">Why BDoctor?</h2>
                <div class="row gy-4 gy-lg-0 m-0">
                    <div class="col-12 col-lg-4" v-for="whyElement, i in whyList">
                        <div class="info-box card-shadow d-flex justify-content-center align-items-center flex-column">
                            <h3 class="text-center mb-3">
                                {{ whyElement.title }}
                            </h3>
                            <p v-if="i == 0" class="text-center m-0">
                                + {{ getFormat(store.stats.nDoctors) }}
                            </p>
                            <p v-else-if="i == 1" class="text-center m-0">
                                + {{ getFormat(store.stats.nCustomers) }}
                            </p>
                            <p v-else class="text-center m-0">
                                + {{ getFormat(store.stats.nSpecializations) }}
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
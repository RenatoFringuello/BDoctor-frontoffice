<script>
import {store} from '../../store';

export default {
    name: 'HomeInfo',
    data() {
        return {
            store,
            heroes:[
                {
                    title:'Trova il tuo esperto.',
                    imgName:'find-your-expert',
                    imgExt:'jpg',
                    content:'Di sotto puoi consultare l\'elenco dei Medici attualmente disponibili per la prenotazione online di una visita medica specialistica o di altro esame medico.',
                    dir:'flex-row-reverse'
                },
                {
                    title:'Sei un Professionista?',
                    imgName:'doc-guy',
                    imgExt:'png',
                    content:'BDoctor è la piattaforma facile e veloce per essere contattato dai pazienti della tua città',
                    dir:'flex-row'
                }
            ],
            cards:[
                {
                    title:'Trova un dottore nella tua città',
                    icon:'fa-solid fa-magnifying-glass',
                    content:'Scegli tra oltre 200 000 medici di medicina generale e specialisti. Leggi le recensioni di altri pazienti.'
                },
                {
                    title:'Prenota una visita: è facile e gratuito!',
                    icon:'fa-solid fa-calendar',
                    content:'Scegli la data che preferisci, inserisci i tuoi dati e conferma… la visita è prenotata! Non comporta costi aggiuntivi.'
                },
                {
                    title:'Richiedi prescrizioni',
                    icon:'fa-solid fa-comment-dots',
                    content:'Richiedi prescrizioni e condividi i risultati di test ed analisi con il tuo medico di medicina generale.'
                },
                {
                    title:'Promemoria via mail e SMS',
                    icon:'fa-solid fa-clock',
                    content:'Ricorderai sempre le tue visite future! Ti ricorderemo della tua visita tramite email e sms.'
                }
            ]
        }
    }
}
</script>

<template>
    <section id="info">
        <div class="container">
            <!-- info-hero -->
            <div class="row g-0 rounded-5 overflow-hidden mb-5" :class="hero.dir" v-for="hero in heroes">
                <div class="col-12 col-md-7 info-hero">
                    <img :src="store.getImgPath(hero.imgName, hero.imgExt)">
                </div>
                <div class="description-hero col-12 col-md-5 doc-btn d-flex flex-column justify-content-center">
                    <h2 class="text-white mb-5">{{ hero.title }}</h2>
                    <p>{{ hero.content }}</p>
                    <p class="m-0">{{ hero.content2 }}</p>
                </div>
            </div>
            <!-- info-cards -->
            <div class="row g-4 my-5" id="info-cards">
                <div class="col-12 col-md-6 col-xl-3" v-for="card in cards">
                    <div class="card rounded-4 p-3 h-100">
                        <h5 class="mb-4">
                            <i :class="card.icon" class="me-2 text-doctor"></i>
                            {{ card.title }}
                        </h5>
                        <p class="m-0 text-secondary">
                            {{ card.content }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>  
    <div class="wave-shape bottom">
        <img :src="store.getImgPath('bottom-shape', 'png')" alt="">
    </div>
</template>

<style lang="scss" scoped>
    @use '../../styles/partials/variables' as * ;

    section#info {
        background-color: white;
        padding: 4rem 0;

        .info-hero {
            overflow: hidden;
            
            img{
                width: 100%;
                height: 350px;
                object-fit: cover;
                object-position: top;
            }
        }
        .description-hero{
            height: 350px;
            padding:0 2.5rem !important;
        }

        #info-cards .card{
            border: 2px solid $main-doc-color;
            p{
                font-size: .9rem;
                text-align: justify;
            }
        }

    }
    div.wave-shape{
        &.bottom{
            img{
                filter: invert(47%) sepia(95%) saturate(409%) hue-rotate(137deg) brightness(94%) contrast(7%);
                -webkit-filter: invert(47%) sepia(95%) saturate(409%) hue-rotate(137deg) brightness(94%) contrast(70%);
            }
        }
    }
</style>
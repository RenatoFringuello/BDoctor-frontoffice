import { reactive } from "vue";
import { DateTime } from "luxon";
import axios from 'axios';

export const store = reactive({
    /**
     * 
     * @param {*} imgPath - must be a string
     * @returns 
     */
    getImgPath(imgPath, type) {
        return new URL(`./assets/images/${imgPath}.${type}`, import.meta.url).href;
    },

    /**
 * 
 * @param {*} imgPath - must be a string
 * @returns 
 */
    getNewsImgPath(imgPath, type) {
        return new URL(`./assets/images/talk-loghi/${imgPath}.${type}`, import.meta.url).href;
    },
    /**
     * 
     * @returns DateTime luxon
     */
    getLuxonDateTime() {
        return DateTime;
    },

    dataraw: [],
    specializationList: [],
    doctorList: [],
    specializationSelected: '',
    singleDoctor: [],
    doctorSponsored: [],

    getDataApi(location, params = { params:{} }, apiUri = 'http://127.0.0.1:8000/api/') {

        axios.get(apiUri + location, params)
            .then((response) => {
                store.dataraw = response.data.results;
                // console.log(store.dataraw);
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(() => {
                //to use case 'doctor even for single doctor
                location = (location.startsWith('doctors')) ? 'doctors' : location; 
                switch (location) {
                    
                    case 'specializations':
                        store.specializationList = this.dataraw;
                        break;
                        
                    case 'doctors':
                        store.doctorList = store.singleDoctor = this.dataraw;
                        break;

                    case 'sponsored':
                        store.doctorSponsored = this.dataraw;
                        break;
                    }
                }
            );
    },

    // Create stars review
    getStars(vote) {
        vote /= 2;
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (vote < 0.8) {
                //not full active
                if (vote >= 0.3) {
                    // 100% half
                    stars.push(0.5);
                }
                else {
                    // 100% disabled
                    stars.push(0);
                }
            }
            else {
                //100% active
                stars.push(1);
            }
            vote--;
        }
        return stars;
    },
});
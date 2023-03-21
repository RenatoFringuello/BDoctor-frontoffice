import { reactive } from "vue"
import { DateTime } from "luxon"

export const store = reactive({
    /**
     * 
     * @param {*} imgPath - must be a string
     * @returns 
     */
    getImgPath(imgPath){
        return new URL(`./assets/images/${imgPath}`, import.meta.url).href;
    },
    /**
     * 
     * @returns DateTime luxon
     */
    getLuxonDateTime(){
        return DateTime;
    }
});
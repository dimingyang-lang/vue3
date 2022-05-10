import {Computed, mapGetters, useStore} from "vuex";
import {account} from "@/store/type";
import {computed} from "vue";

function gettres(arr:any) {
    const a =  mapGetters(arr)
    const $store = useStore<any>()
    for (const key in a) {
        a[key] =  computed( a[key].bind({$store})) as unknown as Computed
    }
    return a
}

export default gettres

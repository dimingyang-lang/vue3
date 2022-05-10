import {Computed, mapState, useStore} from "vuex";
import {account} from "@/store/type";
import {computed} from "vue";

function util(arr:any) {
    const a =  mapState(arr)
    const $store = useStore<account>()
    for (const key in a) {
        a[key] =  computed( a[key].bind({$store})) as unknown as Computed
    }
    return a
}

export default util

import {Computed, mapGetters, useStore,mapState} from "vuex";
import {computed} from "vue";
export enum w{
    state,
    g
}
function maps(arr:any,who:w) {
    let a:any;
   switch (who) {
       case w.state:
             a = mapState(arr)
           break
       case w.g:
           a = mapGetters(arr)
           break
   }
    const $store = useStore<any> ()
    for (const key in a) {
        a[key] =  computed( a[key].bind({$store})) as unknown as Computed
    }
    return a
}

export default maps

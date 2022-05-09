<template>
  {{name}}--{{s}}
</template>
<script lang="ts">
import { computed } from 'vue'
import { useStore,mapState } from 'vuex'
import {account} from "@/store/type";
import object from "async-validator/dist-types/validator/object";
import string from "async-validator/dist-types/validator/string";
export default {
  name:'App',
  setup(){
   const a =  mapState(['num','password'])
    console.log(a)
    const $store = useStore<account>()
    for (const key in a) {
      a[key as keyof typeof a] = a[key as keyof typeof a ].bind({$store})
    }
    const name = computed(a.num)
    const s = computed(a.password)
    return {
     name,s
    }
  }
}
</script>
<style lang="less">

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html,body,#app{
  width: 100vw;
  height: 100vh;
}
</style>

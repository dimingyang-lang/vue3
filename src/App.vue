<template>
{{n}}
  <button @click="change(8)">22</button>
</template>
<script lang="ts">
import maps, {w as who} from "@/hooks/commonMap";
import { mapMutations } from 'vuex'
export default {
  name:'App',
  setup(){
    let a = maps({
      n:(state:any)=>state.num,
      p:'password'
    },who.state)
    let i = maps({
        l:'to',
        b:'ad'
    },who.g)
    const b = mapMutations(['change'])
    // const i = maps({
    //   l:'to',
    //   b:'ad'
    // },'g')

    return {
  ...a,...b,
      ...i
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

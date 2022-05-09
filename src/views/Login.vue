<template>
  <div class="login">
    <div class="login_card">
        <el-tabs type="border-card" stretch>
          <el-tab-pane >
            <template #label>
              手机号登录
            </template>
            <loginP></loginP>
          </el-tab-pane>
          <el-tab-pane>
            <template #label>
              邮箱登录
            </template>
            <loginG></loginG>
          </el-tab-pane>
        </el-tabs>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import loginG  from '@/views/login/loginG.vue'
import loginP  from '@/views/login/loginP.vue'
export default defineComponent({
  name: 'HomeView',
  components: {
    loginG,
    loginP
  },
});
</script>
<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: cyan;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: top left;
  .login_card {
    height: 160px;
    width: 380px;
    background: rgba(0, 0 , 0 ,.2);
    margin: 200px auto;
  }
}

</style>

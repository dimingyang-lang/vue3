<template>
  <el-form label-width="60px" label-position="left" :model="account" :rules="rules" ref="form_phone" :hide-required-asterisk="true">
    <el-form-item  prop="num">
      <template #label>
        <span style="color: firebrick">*</span>账户
      </template>
      <el-input v-model="account.num"></el-input>
    </el-form-item>
    <el-form-item  prop="password">
      <template #label>
       <span style="color: firebrick">*</span>密码
      </template>
      <el-input v-model="account.password" show-password></el-input>
    </el-form-item>
  </el-form>
  <div style="display: flex;justify-content: flex-end">
    <el-button type="primary" @click="login" size="small">登录</el-button>
  </div>
</template>

<script lang="ts">
import login from './config/login'
export default {
  name: "logP",
  setup: () => login
}
</script>

<style scoped>

</style>

<template>
  <div class="login">
    <el-form :model="form" label-width="auto" style="max-width: 600px">
      <el-form-item label="Username">
        <el-input v-model="username" />
      </el-form-item>
      <el-form-item label="Password">
        <el-input v-model="password" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Log In</el-button>
      </el-form-item>
    </el-form>
  </div>
  </template>
  
<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    }
  }
}
</script>

  <style scoped>
  .login {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
</style>
<template>
  <div class="login-panel">
    <h2 class="title">后台管理系统</h2>
    <el-tabs type="border-card" stretch>
      <el-tab-pane>
        <template #label>
          <span>
            <el-icon><user-filled /></el-icon>账号登陆
          </span>
        </template>
        <LoginAccount />
      </el-tab-pane>

      <el-tab-pane>
        <template #label>
          <span>
            <el-icon><iphone /></el-icon>手机登录
          </span>
        </template>
        <login-phone />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { UserFilled, Iphone } from '@element-plus/icons'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'

export default {
  components: { UserFilled, Iphone, LoginAccount, LoginPhone }
}
</script>
<style scoped lang="less">
.login-panel {
  margin-bottom: 150px;
  width: 320px;

  .title {
    text-align: center;
  }
}
</style>

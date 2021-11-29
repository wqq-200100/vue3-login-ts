<template>
  <div class="login-panel">
    <h2 class="title">后台管理系统</h2>
    <el-tabs type="border-card" stretch v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <span>
            <el-icon><user-filled /></el-icon>账号登陆
          </span>
        </template>
        <LoginAccount ref="accountRef" />
      </el-tab-pane>

      <el-tab-pane name="phone">
        <template #label>
          <span>
            <el-icon><iphone /></el-icon>手机登录
          </span>
        </template>
        <login-phone ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>

    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-row><el-button type="primary" class="login-btn" @click="handleLoginClick">立即登录</el-button></el-row>
  </div>
</template>

<script lang="ts">
import { UserFilled, Iphone } from '@element-plus/icons'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  components: {
    UserFilled,
    Iphone,
    LoginAccount,
    LoginPhone
  },
  setup() {
    // 定义属性
    const isKeepPassword = ref(true)
    // typeof LoginAccount:拿到对象的类型
    const accountRef = ref<InstanceType<typeof LoginAccount>>() // 拿到LoginAccount对象
    const phoneRef = ref<InstanceType<typeof LoginPhone>>()
    const currentTab = ref('account')

    // 定义方法
    // 立即登录
    const handleLoginClick = () => {
      if (currentTab.value === 'account') {
        accountRef.value?.loginAction(isKeepPassword.value)
      } else {
        console.log('phone里面的ref调用phoneLogin')
      }
    }

    return {
      isKeepPassword,
      accountRef,
      phoneRef,
      handleLoginClick,
      currentTab
    }
  }
})
</script>
<style scoped lang="less">
.login-panel {
  margin-bottom: 150px;
  width: 320px;

  .title {
    text-align: center;
  }

  .account-control {
    display: flex;
    justify-content: space-between;
    margin-top: 6px;
  }

  .login-btn {
    width: 100%;
    margin-top: 10px;
  }
}
</style>

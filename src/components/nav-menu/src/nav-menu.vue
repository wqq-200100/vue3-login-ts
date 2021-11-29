<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="@/assets/img/logo.svg" alt="logo" />
      <span class="title">ve3+TS</span>
    </div>

    <el-menu default-active="2" class="el-menu-vertical-demo">
      <template v-for="item in useMenu" :key="item.id">
        <!--二级菜单-->
        <template v-if="item.type === 1">
          <!--二级菜单可以展开的标题-->
          <el-sub-menu>
            <i v-if="item.icon" :class="item.icon"></i>
            <span>{{ item.name }}</span>
          </el-sub-menu>
          <!--遍历里面的item-->
          <template v-for="subitem in item.children" :key="subitem.id">
            <el-menu-item>
              <i v-if="item.icon" :class="item.icon"></i>
              <span>{{ subitem.name }}</span>
            </el-menu-item>
          </template>
        </template>
        <!--一级菜单-->
        <template v-else-if="item.type === 2">
          <el-menu-item>
            <i v-if="item.icon" :class="item.icon"></i>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'

export default defineComponent({
  setup() {
    const store = useStore()
    const useMenu = computed(() => store.state.login.userMenus)
    return { useMenu }
  }
})
</script>

<style scoped lang="less">
.nav-menu {
  height: 100%;
  background-color: #001529;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }
}
</style>

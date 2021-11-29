<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

// defineComponent:从ts角度来看，做很多类型的限制，让我们组件之间的代码更加的严谨
export default defineComponent({
  name: 'App'
})
</script>

<style lang="less">
.app {
  height: 100%;
}
</style>

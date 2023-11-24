<template>
  <div class="right-panel-container">
    <el-menu
      style="border: none"
      background-color="#2a5eff"
      class="el-menu-vertical-demo"
      default-active="2"
      text-color="#fff"
      router
      ><menu-item v-for="route in routes" :route="route" :key="route.path"
    /></el-menu>
  </div>
</template>

<script setup>
import { defineComponent, computed } from "vue"
import MenuItem from "@/components/RightPanel/MenuItem.vue"
import routes from "@/router/routes.js"
defineComponent({
  components: { MenuItem }
})

computed({
  routes: routes
});

</script>

<style lang="less" scoped>
.right-panel-container {
  width: 100%;
  height: 100vh;
  background-color: #409eff;
  color: #fff;
  overflow-y: auto;
  :deep(.el-menu .el-sub-menu.is-active .el-sub-menu__title),
  :deep(.el-menu .el-menu-item.is-active) {
    background-color: var(--el-menu-hover-bg-color);
    color: #2f6498;
  }
  :deep(.el-menu .el-menu-item.is-active) {
    border-left: 3px solid #409eff;
  }
  :deep(.el-sub-menu .el-menu) {
    background-color: darken(#3f80c1, 10%);
  }
}

.right-logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  .right-logo {
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 8px;
    img {
      height: 48px;
    }
  }
}
</style> 

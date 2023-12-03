<template>
  <div class="layout_container">
    <!-- 顶部导航 -->
    <div class="layout_nav">123</div>
    <!-- 左侧菜单 -->
    <div class="layout_slider">
      <Logo></Logo>
      <el-scrollbar class="scrollbar">
        <el-menu
          background-color="#001529"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <Menu :menuList="userStore.menuRoutes"></Menu>
        </el-menu>
      </el-scrollbar>
    </div>

    <!-- 右侧内容 -->
    <div class="layout_content">
      <p style="height: 100px"></p>
    </div>
  </div>
</template>

<script setup lang="ts">
import {} from 'vue'
import Logo from './Logo/index.vue'
import Menu from './Menu/index.vue'
//引入user数据
import useUserStore from '@/store/modules/user'
let userStore = useUserStore()
</script>

<style lang="scss" scoped>
.layout_container {
  width: 100%;
  height: 100vh;
  background-color: #fafafa;

  .layout_slider {
    width: $layout-slider-width;
    height: 100vh;
    background-color: $layout-slider-bg;

    .scrollbar {
      width: 100%;
      height: calc(100vh - $layout-nav-height);

      .el-menu {
        border-right: 0;
      }
    }
  }

  .layout_nav {
    position: fixed;
    width: calc(100% - $layout-slider-width);
    height: $layout-nav-height;
    background-color: $layout-nav-bg;
    top: 0;
    left: $layout-slider-width;
    padding: 10px;
  }

  .layout_content {
    position: absolute;
    width: calc(100% - $layout-slider-width);
    height: calc(100vh - $layout-nav-height);
    background-color: $layout-content-bg;
    left: $layout-slider-width;
    top: $layout-nav-height;
    padding: 20px;
    overflow: auto;
  }
}
</style>

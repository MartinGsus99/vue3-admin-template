<template>
  <div class="layout_container">
    <!-- 顶部导航 -->
    <div class="layout_nav">
      <TopBar :isCollapse="isCollapse" :changeCollapse="changeCollapse"></TopBar>
    </div>
    <!-- 左侧菜单 -->
    <div class="layout_slider">
      <Logo></Logo>
      <el-scrollbar class="scrollbar">
        <el-menu
          :default-active="$route.path"
          background-color="#001529"
          text-color="#fff"
          active-text-color="#ffd04b"
          :collapse="isCollapse"
          :collapse-transition="false"
        >
          <Menu :menuList="userStore.menuRoutes"></Menu>
        </el-menu>
      </el-scrollbar>
    </div>

    <!-- 右侧内容 -->
    <div class="layout_content">
      <Main></Main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TopBar from './TopBar/index.vue'
import Logo from './Logo/index.vue'
import Menu from './Menu/index.vue'
import Main from './Main/index.vue'
//引入user数据
import useUserStore from '@/store/modules/user'
import { useRoute } from 'vue-router'
let userStore = useUserStore()
let $route = useRoute()
let isCollapse = ref(false)

const changeCollapse = () => {
  isCollapse.value = !isCollapse.value
}
</script>

<style lang="scss" scoped>
.layout_container {
  width: 100%;
  height: 100vh;
  background-color: #ffffff;

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

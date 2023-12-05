<template>
  <div class="layout_container">
    <!-- 顶部导航 -->
    <div
      class="layout_nav"
      :class="{ fold: layoutSetting.fold ? true : false }"
    >
      <TopBar></TopBar>
    </div>
    <!-- 左侧菜单 -->
    <div
      class="layout_slider"
      :class="{ fold: layoutSetting.fold ? true : false }"
    >
      <Logo></Logo>
      <el-scrollbar class="scrollbar">
        <el-menu
          :default-active="$route.path"
          background-color="#001529"
          text-color="#fff"
          active-text-color="#ffd04b"
          :collapse="layoutSetting.fold"
          :collapse-transition="false"
        >
          <Menu :menuList="userStore.menuRoutes"></Menu>
        </el-menu>
      </el-scrollbar>
    </div>

    <!-- 右侧内容 -->
    <div
      class="layout_content"
      :class="{ fold: layoutSetting.fold ? true : false }"
    >
      <Main></Main>
    </div>

    <!-- 侧边抽屉 -->
    <Drawer></Drawer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TopBar from './TopBar/index.vue'
import Logo from './Logo/index.vue'
import Menu from './Menu/index.vue'
import Main from './Main/index.vue'
import Drawer from './TopBar/Drawer/index.vue'
//引入user数据
import useUserStore from '@/store/modules/user'
import useLayoutSettingStore from '@/store/modules/setting'
import { useRoute } from 'vue-router'
let userStore = useUserStore()
let $route = useRoute()
let layoutSetting = useLayoutSettingStore()
console.log('layout', layoutSetting.fold)
</script>

<style lang="scss" scoped>
.layout_container {
  width: 100%;
  height: 100vh;

  .layout_slider {
    width: $layout-slider-width;
    height: 100vh;
    background-color: $layout-slider-bg;
    transition: all 0.3s;
    .scrollbar {
      width: 100%;
      height: calc(100vh - $layout-nav-height);

      .el-menu {
        border-right: 0;
      }
    }
    &.fold {
      width: $layout-slider-menu-min-width;
    }
  }

  .layout_nav {
    position: fixed;
    width: calc(100% - $layout-slider-width);
    height: $layout-nav-height;

    top: 0;
    left: $layout-slider-width;
    padding: 10px;
    transition: all 0.3s;
    &.fold {
      width: calc(100% - $layout-slider-menu-min-width);
      left: $layout-slider-menu-min-width;
    }
  }

  .layout_content {
    position: absolute;
    width: calc(100% - $layout-slider-width);
    height: calc(100vh - $layout-nav-height);

    left: $layout-slider-width;
    top: $layout-nav-height;
    padding: 20px;
    overflow: auto;
    transition: all 0.3s;
    &.fold {
      width: calc(100% - $layout-slider-menu-min-width);
      left: $layout-slider-menu-min-width;
    }
  }
}
</style>

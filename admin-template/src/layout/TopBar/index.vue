<template>
  <div class="topbar">
    <div class="topbar-left">
      <el-icon class="icon">
        <Expand v-if="!layoutSetting.fold" @click="changeCollapse" />
        <Fold v-if="layoutSetting.fold" @click="changeCollapse" />
      </el-icon>
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/' }">123</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="topbar-right">
      <el-button
        size="small"
        icon="Refresh"
        circle="true"
        @click="refresh"
      ></el-button>
      <el-button
        size="small"
        icon="FullScreen"
        circle="true"
        @click="fullScreen"
      ></el-button>
      <el-button
        size="small"
        icon="Setting"
        circle="true"
        @click="setting"
      ></el-button>
      <el-avatar class="avatar" :size="24" :src="circleUrl" />
      <el-dropdown>
        <span class="el-dropdown-link">
          个人中心
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item @click="">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { ArrowRight } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
import useLayoutSettingStore from '@/store/modules/setting'
let $router = useRouter()

let layoutSetting = useLayoutSettingStore()
const changeCollapse = () => {
  layoutSetting.fold = !layoutSetting.fold
}
let refresh = () => {}
let fullScreen = () => {}
let setting = () => {}
</script>

<style lang="scss" scoped>
.topbar {
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;

  .topbar-left {
    display: flex;
    align-items: center;
    margin-left: 10px;

    .icon {
      margin-right: 10px;
      cursor: pointer;
    }
  }
  .topbar-right {
    display: flex;
    align-items: center;

    .avatar {
      margin-right: 10px;
      margin-left: 10px;
    }
  }
}
</style>

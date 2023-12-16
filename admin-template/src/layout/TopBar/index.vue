<template>
  <div class="topbar">
    <div class="topbar-left">
      <el-icon class="icon">
        <Expand v-if="!layoutSetting.fold" @click="changeCollapse" />
        <Fold v-if="layoutSetting.fold" @click="changeCollapse" />
      </el-icon>
      <BreadCrumb></BreadCrumb>
    </div>
    <div class="topbar-right">
      <el-button
        size="small"
        icon="Refresh"
        :circle="true"
        @click="refresh"
      ></el-button>
      <el-button
        size="small"
        icon="FullScreen"
        :circle="true"
        @click="fullScreen"
      ></el-button>
      <el-button
        size="small"
        icon="Setting"
        :circle="true"
        @click="setting"
      ></el-button>
      <el-avatar class="avatar" :size="24" :src="userStore.avatar" />
      <el-dropdown>
        <span class="el-dropdown-link">
          {{ userStore.username }}
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import useLayoutSettingStore from '@/store/modules/setting'
import BreadCrumb from './Breadcrumb/index.vue'
import useUserStore from '@/store/modules/user'
let $router = useRouter()
let $route = useRoute()
let layoutSetting = useLayoutSettingStore()
let userStore = useUserStore()
const changeCollapse = () => {
  layoutSetting.fold = !layoutSetting.fold
}
const refresh = () => {
  layoutSetting.refresh = !layoutSetting.refresh
}
const fullScreen = () => {
  //存在兼容性的问题，可以使用全屏插件
  //dom对象的一个属性，可以用来判断是不是全屏模式（全屏：true，不是：false）
  let full = document.fullscreenElement
  if (!full) {
    document.documentElement.requestFullscreen()
  } else {
    document.exitFullscreen()
  }
}
const setting = () => {
  layoutSetting.drawer = true
}

const logout = () => {
  //1.调用退出登录的接口，取消token
  //2.清除token，用户数据
  userStore.userLogout()
  //3.跳转登录页
  $router.push({
    path: '/login',
    query: {
      redirect: $route.path,
    },
  })
}
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

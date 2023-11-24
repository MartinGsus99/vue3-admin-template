<script setup>
import { ref, reactive } from 'vue'

const squareUrl =
  'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png'
const username = ref('Admin')
</script>

<template lang="">
  <div>
    <div class="header-panel-container">
      <div class="header-breadcrumb">
        <el-breadcrumb>
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item v-for="item in $route.matched" :key="item.path">{{
            item.meta.title
          }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="header-operate">
        <el-dropdown>
          <span class="el-dropdown-link">
            <el-avatar shape="square" :size="40" :src="squareUrl"></el-avatar>
            <span class="username-container"> {{ username }}</span>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>个人中心</el-dropdown-item>
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<style lang="less">
.header-panel-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  background-color: #ffffff;

  .username-container {
    margin-left: 10px;
    font-size: 20px;
    color: #606266;
    vertical-align: center;
    align-items: center;
  }
}
</style>

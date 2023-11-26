<template>
  <div class="common-layout">
    <el-container class="full-height">
      <el-container class="full-height">
        <el-aside width="200px">
          <RightPanel></RightPanel>
        </el-aside>
        <el-container>
          <el-header>
            <TopBar></TopBar>
          </el-header>
          <el-main class="main-container">
            <transition name="fade-transform" mode="out-in">
              <router-view :key="key"></router-view>
            </transition>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import RightPanel from '../components/RightPanel/index.vue'
import HeaderPanel from '../components/HeaderPanel/index.vue'
import TopBar from '../components/TopBar/index.vue'

const key = 'uniqueKey' // 为了强制重新渲染 HeaderPanel 组件，你可以使用一个唯一的 key 属性
</script>

<style scoped>
.common-layout {
  height: 100vh;
}

.full-height {
  height: 100%;
}

.main-container {
  padding: 0;
}
</style>

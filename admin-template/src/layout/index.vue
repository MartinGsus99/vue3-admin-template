<template>
  <div class="common-layout">
    <el-container class="full-height">
      <el-container class="full-height">
        <el-aside width="200px">
          <RightPanel></RightPanel>
        </el-aside>
        <el-container>
          <el-header>
            <TopBar> </TopBar>
          </el-header>
          <el-main class="main-container">
            <HeaderPanel></HeaderPanel>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>


<script>
import RightPanel from '../components/RightPanel/index.vue'
import HeaderPanel from '../components/HeaderPanel/index.vue'
import TopBar from '../components/TopBar/index.vue'
export default {
  name: 'Layout',
  components: { RightPanel, HeaderPanel, TopBar },
}
</script>

<style lang="less" scoped>
.common-layout {
  height: 100vh; /* 设置高度为视窗的100% */
}

.full-height {
  height: 100%; /* 设置内部元素的高度为父容器的100% */
}

.main-container {
  padding: 0;
}
</style>
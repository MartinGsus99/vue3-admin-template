<template>
  <div class="top">
    <div class="left">
      <span class="left-btn" @click="returnToHome">首页</span>
    </div>
    <div class="center">
      <div class="title">数据可视化监控平台</div>
    </div>
    <div class="right">
      <span class="right-btn" @click="downloadReport">统计报告</span>
      <span class="right-container"> 当前时间：{{ time }} </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import moment from 'moment'
let time = ref(moment().format('YYYY-MM-DD hh:mm:ss'))
let timer = ref()
let $router = useRouter()
const returnToHome = () => {
  $router.push({
    path: '/',
  })
}

const downloadReport = () => {
  console.log('下载报告')
}

onMounted(() => {
  timer.value = setInterval(() => {
    time.value = moment().format('YYYY-MM-DD hh:mm:ss')
  }, 1000)
})

onBeforeUnmount(() => {
  clearInterval(timer.value)
})
</script>

<style lang="scss" scoped>
.top {
  width: 100%;
  height: 40px;
  display: flex;

  .left {
    flex: 1;
    background: url('../../../../assets/screen_images/dataScreen-header-left-bg.png')
      no-repeat;
    background-size: cover;

    .left-btn {
      width: 150px;
      height: 40px;
      float: right;
      text-align: center;
      line-height: 40px;
      color: #26d1d1;
      background: url('../../../../assets/screen_images/dataScreen-header-btn-bg-l.png')
        no-repeat;
      background-size: cover;
    }
  }

  .left :hover {
    cursor: pointer;
  }
  .center {
    flex: 2;
    .title {
      width: 100%;
      background: url('../../../../assets/screen_images/dataScreen-header-center-bg.png')
        no-repeat;
      background-size: 100% 100%;
      color: #26d1d1;
      text-align: center;
      line-height: 74px;
      font-size: 35px;
    }
  }

  .right {
    flex: 1;
    background: url('../../../../assets/screen_images/dataScreen-header-right-bg.png')
      no-repeat;
    background-size: cover;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .right-btn {
      width: 150px;
      height: 40px;
      float: left;
      text-align: center;
      line-height: 40px;
      color: #26d1d1;
      background: url('../../../../assets/screen_images/dataScreen-header-btn-bg-r.png')
        no-repeat;
      background-size: cover;
    }

    .right-container {
      color: #26d1d1;
      margin-right: 10px;
    }
  }

  .right :hover {
    cursor: pointer;
  }
}
</style>

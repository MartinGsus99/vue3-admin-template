<template>
  <div class="top-container">
    <div class="top-tip">
      <p class="top-title">实时统计</p>
      <p class="bg"></p>
      <p class="top-data">
        可预约总量：<span>{{ people }}</span
        >人
      </p>
    </div>
    <div class="number">
      <span
        class="number-item"
        v-for="(item, index) in relPeople"
        :key="index"
        >{{ item }}</span
      >
    </div>

    <div class="charts" ref="charts"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'
import 'echarts-liquidfill'
let people = ref(9999)
let relPeople = ref('215908人')
let charts = ref()

onMounted(() => {
  let mycharts = echarts.init(charts.value)
  mycharts.setOption({
    title: {
      text: '实时拜访人数',
    },
    //X|Y轴
    xAxis: {},
    yAxis: {},
    //系列：决定展示图形类型
    series: {
      type: 'liquidFill',
      data: [0.6, 0.3],
      center: ['50%', '50%'],
      radius: '80%',
      shape: 'circle',
    },
    //布局
    grid: {
      left: 0,
      right: 0,
      bottom: 0,
      top: 0,
    },
  })
})
</script>

<style lang="scss" scoped>
.top-container {
  background: url('../../../../assets/screen_images/dataScreen-main-lb.png')
    no-repeat;
  background-size: 100% 100%;
  margin-top: 10px;

  .top-tip {
    margin-left: 20px;

    .top-title {
      color: white;
      font-size: 20px;
    }

    .bg {
      width: 68px;
      height: 7px;
      background: url('../../../../assets/screen_images/dataScreen-title.png');
    }

    .top-data {
      color: white;
      float: right;
      font-size: 20px;
      margin-right: 10px;

      span {
        color: yellow;
      }
    }
  }

  .number {
    display: flex;
    margin-top: 30px;
    padding: 10px;

    span {
      flex: 1;
      height: 40px;
      text-align: center;
      line-height: 40px;
      color: white;
      background: url('../../../../assets/screen_images/total.png') no-repeat;
      background-size: 100% 100%;
      color: #29fcff;
    }
  }

  .charts {
    width: 100%;
    height: 260px;
  }
}
</style>

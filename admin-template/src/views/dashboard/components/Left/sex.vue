<template>
  <div class="left-box-2">
    <div class="left-box-2-title">
      <p>男女比例</p>
      <img src="../../../../assets/screen_images/dataScreen-title.png" alt="" />
    </div>
    <div class="left-box-2-content">
      <div class="left-box-2-content-img-man">
        <img src="../../../../assets/screen_images/man.png" />
      </div>
      <div class="left-box-2-content-img-woman">
        <img src="../../../../assets/screen_images/woman.png" />
      </div>
    </div>
    <div class="left-box-2-title-bottom">
      <p>男士{{ 48 }}%</p>
      <p>女士{{ 52 }}%</p>
    </div>
    <div class="left-box-2-map" ref="charts"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'
let charts = ref()

onMounted(() => {
  let myChart = echarts.init(charts.value)
  myChart.setOption({
    xAxis: {
      show: false,
    },
    yAxis: {
      show: false,
    },
    series: [
      {
        type: 'bar',
        data: [10],
      },
    ],
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
.left-box-2 {
  background: url('../../../../assets/screen_images/dataScreen-main-cb.png')
    no-repeat;
  background-size: 100% 100%;
  margin: 20px 0px;

  .left-box-2-title {
    color: white;
    font-size: 20px;
  }

  .left-box-2-content {
    display: flex;
    justify-content: center;
    margin-top: 20px;

    .left-box-2-content-img-man {
      margin: 40px;
      background: url('../../../../assets/screen_images/man-bg.png') no-repeat;
      background-size: 100% 100%;
      width: 111px;
      height: 115px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .left-box-2-content-img-woman {
      margin: 40px;
      background: url('../../../../assets/screen_images/man-bg.png') no-repeat;
      background-size: 100% 100%;
      width: 111px;
      height: 115px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .left-box-2-title-bottom {
    display: flex;
    justify-content: space-between;
    margin: 0px 100px;
    font-size: 20px;
    p {
      color: white;
    }
  }

  .left-box-2-map {
    height: 100px;
  }
}
</style>

<template>
  <div class="container">
    <dv-border-box8 :dur="5">
      <div dv-bg>
        <dv-flyline-chart
          :config="config"
          :dev="false"
          style="width: 100%; height: 100%"
        />
      </div>
    </dv-border-box8>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const config = ref({
  // 子元素为数组
  points: [
    // 飞线起始点的坐标
    [10, 10],
    [100, 100],
  ],
})
</script>

<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100vh;
  background: url('../../assets/main.jpeg') no-repeat;
  background-size: cover;
}
</style>

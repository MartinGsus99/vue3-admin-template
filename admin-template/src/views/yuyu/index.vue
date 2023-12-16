<template>
  <div class="center-container">
    <el-rate
      v-model="value"
      :texts="['消极', '一般', '积极']"
      show-text
      :max="3"
      size="default"
    />
  </div>
</template>

<style>
.center-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Adjust the height as needed */
}
</style>

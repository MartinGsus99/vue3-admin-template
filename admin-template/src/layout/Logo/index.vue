<template>
  <div class="logo">
    <img v-if="setting.logoHidden" :src="setting.logo" />
    <p>{{ setting.tilte }}</p>
  </div>
</template>

<script setup lang="ts">
import {} from 'vue'
import setting from '@/setting'
</script>

<style lang="scss" scoped>
.logo {
  height: $layout-logo-height;
  width: 100%;
  display: flex;
  color: white;
  align-items: center;

  img {
    width: 30px;
    height: 30px;
  }
  p {
    margin-left: 30px;
    font-size: $font-size-large;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  }
}
</style>

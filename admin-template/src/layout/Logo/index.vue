<template>
  <div class="logo">
    <img v-if="setting.logoHidden" :src="setting.logo" />
    <p v-if="!layoutSetting.fold">{{ setting.tittle }}</p>
  </div>
</template>

<script setup lang="ts">
import {} from 'vue'
import setting from '@/setting'
import useLayoutSettingStore from '@/store/modules/setting'
let layoutSetting = useLayoutSettingStore()
</script>

<style lang="scss" scoped>
.logo {
  height: $layout-logo-height;
  width: 100%;
  display: flex;
  color: white;
  align-items: center;
  padding: 10px;
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

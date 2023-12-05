<template>
  <div class="">
    <el-drawer
      v-model="layoutSetting.drawer"
      title="系统配置"
      :before-close="handleClose"
    >
      <span>主题切换：</span>
      <el-switch
        v-model="theme"
        size="large"
        active-icon="Moon"
        active-text="Dark"
        inactive-icon="Sunny"
        inactive-text="Light"
        @change="changeTheme"
      />
      <el-divider />
      <span>主题颜色：</span>
      <el-color-picker v-model="color" size="large" />
    </el-drawer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import useLayoutSettingStore from '@/store/modules/setting'
let layoutSetting = useLayoutSettingStore()

let theme = ref(layoutSetting.theme)
let color = ref(layoutSetting.color)

const changeTheme = () => {
  let html = document.documentElement
  theme.value ? (html.className = 'dark') : (html.className = '')
}
</script>

<style lang="scss" scoped></style>

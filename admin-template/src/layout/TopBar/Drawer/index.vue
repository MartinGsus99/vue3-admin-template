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
      <el-color-picker
        v-model="color"
        show-alpha
        :predefine="predefineColors"
        @change="changeColor"
      />
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

const changeColor = () => {
  console.log(color.value)
  const html = document.documentElement
  html.style.setProperty('--el-color-primary', color.value)
  console.log(html)
}

const predefineColors = ref([
  '#ff4500',
  '#ff8c00',
  '#ffd700',
  '#90ee90',
  '#00ced1',
  '#1e90ff',
  '#c71585',
  'rgba(255, 69, 0, 0.68)',
  'rgb(255, 120, 0)',
  'hsv(51, 100, 98)',
  'hsva(120, 40, 94, 0.5)',
  'hsl(181, 100%, 37%)',
  'hsla(209, 100%, 56%, 0.73)',
  '#c7158577',
])
</script>

<style lang="scss" scoped></style>

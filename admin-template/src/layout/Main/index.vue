<template>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" v-if="destroyFlag" />
    </transition>
  </router-view>
</template>

<script setup lang="ts">
import { watch, ref, nextTick } from 'vue'
import useLayoutSettingStore from '@/store/modules/setting'
let layoutSetting = useLayoutSettingStore()

//控制当前组件是否销毁
let destroyFlag = ref(true)

watch(
  () => layoutSetting.refresh,
  () => {
    destroyFlag.value = false
    //销毁再创建，next Tick保证销毁的组件渲染完
    nextTick(() => {
      destroyFlag.value = true
    })
  }
)
</script>

<style scoped>
.fade-enter-from {
  opacity: 0;
  transform: scale(0);
}

.fade-enter-active {
  transition: all 1s ease;
  transform: scale(1);
}

.fade-enter-to {
  opacity: 1;
  transform: scale(1);
}

.fade-enter-leave {
  opacity: 0;
}
</style>

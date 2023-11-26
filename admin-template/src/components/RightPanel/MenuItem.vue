<template>
  <el-sub-menu
    v-if="route.children && route.children.length > 0"
    :index="route.path"
  >
    <template #title>
      <span>{{ (route.meta || { title: route.path }).title }}</span>
    </template>
    <menu-item v-for="item in route.children" :route="item" :key="item.path" />
  </el-sub-menu>
  <el-menu-item :index="route.path" v-else>
    <template #title>
      <span>{{ (route.meta || { title: route.path }).title }}</span>
    </template>
  </el-menu-item>
</template>

<script setup>
import { defineProps, onMounted, ref } from 'vue'


defineProps({
  route: { type: Object, default: () => ({}) },
})


onMounted(() => {

})
</script>

<style scoped></style>

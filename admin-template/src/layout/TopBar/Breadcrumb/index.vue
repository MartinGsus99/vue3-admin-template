<template>
  <div class="">
    <el-breadcrumb>
      <el-breadcrumb-item
        v-for="(item, index) in $route.matched"
        :key="index"
        v-show="item.meta.title"
        :to="item.path"
      >
        <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon>
        <span class="breadcrumb">{{ item.meta.title }}</span>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import useUserStore from '@/store/modules/user'
import { useRoute } from 'vue-router'
let userStore = useUserStore()
let $route = useRoute()
console.log(userStore.menuRoutes)
</script>

<style lang="scss" scoped>
.breadcrumb {
  margin: 0 5px;
}
</style>

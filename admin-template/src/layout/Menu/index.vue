<template>
  <template v-for="(item, index) in menuList" :key="item.path">
    <template v-if="!item.children">
      <el-menu-item
        v-if="!item.children && item.meta.hidden == false"
        :index="item.path"
        @click="goToRoute"
      >
        <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon>
        <template #title>
          <span>
            {{ item.meta.title }}
          </span>
        </template>
      </el-menu-item>
    </template>

    <template v-if="item.children && item.children.length == 1">
      <el-menu-item
        :index="item.children[0].path"
        v-if="!item.children[0].meta.hidden"
        @click="goToRoute"
      >
        <el-icon>
          <component :is="item.children[0].meta.icon"></component>
        </el-icon>

        <template #title>
          <span>
            {{ item.children[0].meta.title }}
          </span>
        </template>
      </el-menu-item></template
    >

    <el-sub-menu
      :index="item.path"
      v-if="
        item.children && item.children.length > 1 && item.meta.hidden == false
      "
    >
      <template #title>
        <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon>
        <span>
          {{ item.meta.title }}
        </span>
      </template>
      <Menu :menuList="item.children"></Menu>
    </el-sub-menu>
  </template>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

defineProps(['menuList'])

let $router = useRouter()

const goToRoute = (vc: any) => {
  $router.push({ path: vc.index })
}
</script>

<script lang="ts">
//递归组件需要使用vue2写法
export default {
  name: 'Menu',
}
</script>

<style lang="scss" scoped></style>

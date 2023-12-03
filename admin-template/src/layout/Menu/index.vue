<template>
  <div class="">
    <template v-for="(item, index) in menuList" :key="item.path">
      <el-menu-item
        v-if="!item.children && item.meta.hidden == false"
        :index="item.path"
        @click="goToRoute"
      >
        <template #title>
          <el-icon>
            <component :is="item.meta.icon"></component>
          </el-icon>

          <span>
            {{ item.meta.title }}
          </span>
        </template>
      </el-menu-item>
      <el-menu-item
        v-if="
          item.children &&
          item.children.length == 1 &&
          item.meta.hidden == false
        "
        :index="item.path"
      >
        <template #title>
          <el-icon>
            <component :is="item.meta.icon"></component>
          </el-icon>

          <span>
            {{ item.children[0].meta.title }}
          </span>
        </template>
      </el-menu-item>
      <el-sub-menu
        v-if="
          item.children && item.children.length > 1 && item.meta.hidden == false
        "
        :index="item.path"
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
  </div>
</template>

<script setup lang="ts">
defineProps(['menuList'])

const goToRoute = (vc) => {
  console.log(vc.index)
  
}
</script>

<script lang="ts">
//递归组件需要使用vue2写法
export default {
  name: 'Menu',
}
</script>

<style lang="scss" scoped></style>

<template>
  <div class="">
    <el-card>
      <el-button type="primary" @click="search">查询</el-button>
      <el-button type="" @click="reset">重置</el-button>
    </el-card>
    <el-divider></el-divider>
    <el-card>
      <DynamicTable
        :tableData="tableData"
        :tableHeadData="tableHeadData"
        :operationData="operationData"
      ></DynamicTable>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DynamicTable from '@/components/DynamicTable/index.vue'

const tableData = ref([
  {
    id: 1,
    name: '张三',
    mode: '/sys',
    date: '2022-12-12 12:12:12',
  },
  {
    id: 2,
    name: 'Admin',
    mode: '/sys',
    date: '2022-12-12 12:12:12',
  },
  {
    id: 3,
    name: 'Martin',
    mode: '/sys',
    date: '2022-12-12 12:12:12',
  },
])
const tableHeadData = ref([
  {
    prop: 'name',
    label: '用户名',
    align: 'center',
  },
  {
    prop: 'mode',
    label: '模块',
    align: 'center',
  },
  {
    prop: 'date',
    label: '日期',
    align: 'center',
  },
])

const operationData = ref([
  {
    label: '删除',
    type: 'danger',
    handler: () => {
      console.log('删除')
    },
  },
  {
    label: '编辑',
    type: 'primary',
    handler: () => {
      console.log('编辑')
    },
  },
])

const search = () => {
  console.log('查询')
}

const reset = () => {
  console.log('重置')
}
</script>

<style lang="scss" scoped></style>

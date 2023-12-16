<template>
  <div class="">
    <el-card>
      <DynamicFilter
        :filterItems="filterItems"
        :filterKeys="filterKeys"
      ></DynamicFilter>
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
import DynamicFilter from '@/components/DynamicFilter/index.vue'

let filterItems = ref([
  {
    label: '用户名:',
    key: 'name',
    type: 'string',
    placeholder: '请输入用户名',
  },
  {
    label: '账号:',
    key: 'username',
    type: 'string',
    placeholder: '请输入账号',
  },
])

let filterKeys = ref({
  name: '',
  username: '',
})

let tableData = ref([
  {
    name: 'admin',
    username: 'admin',
    password: '123456',
    role: '超级管理员',
  },
  {
    name: '张三',
    username: 'zhangsan',
    password: '123456',
    role: '管理员',
  },
  {
    name: '李四',
    username: 'lisi',
    password: '123456',
    role: '普通用户',
  },
])

let tableHeadData = ref([
  {
    prop: 'name',
    label: '用户名',
  },
  {
    prop: 'username',
    label: '账号',
  },
  {
    prop: 'password',
    label: '密码',
  },
  {
    prop: 'role',
    label: '角色',
  },
])

let operationData = ref([
  {
    label: '授权',
    type: 'primary',
    handler: () => {
      console.log('授权')
    },
  },
  {
    label: '编辑',
    type: 'primary',
    handler: () => {},
  },
  {
    label: '删除',
    type: 'danger',
    handler: () => {},
  },
])
</script>

<style lang="scss" scoped></style>

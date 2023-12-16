<template>
  <div>
    <el-form ref="form" :inline="true" :model="form" class="demo-form-inline">
      <el-form-item
        v-for="item in filterItems"
        :label="item.label"
        :prop="item.key"
      >
        <el-input
          v-model="filterKeys[item.key]"
          :placeholder="item.placeholder"
          clearable
        />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
        <el-button type="" @click="resetForm">清空</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
let form = ref()
const props = defineProps({
  filterItems: {
    type: Array,
    default: () => {},
  },
  filterKeys: {
    type: Object,
    default: {},
  },
})

let $refs = ref
const onSubmit = () => {
  console.log('submit!')
}

const resetForm = () => {
  console.log('reset!')
  form.value.resetFields()
}
</script>

<style scoped></style>

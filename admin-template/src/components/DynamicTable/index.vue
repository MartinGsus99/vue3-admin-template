<template>
  <div class="">
    <el-table :data="tableData" stripe style="width: 100%" align="center">
      <el-table-column
        type="index"
        prop="id"
        label="序号"
        width="60"
        align="center"
      />
      <el-table-column
        v-for="(item, index) in tableHeadData"
        :prop="item.prop"
        :label="item.label"
        :width="item.width"
        align="center"
      ></el-table-column>
      <el-table-column fixed="right" label="操作" align="center">
        <template #default>
          <el-button
            link
            :type="item.type"
            size="small"
            v-for="item in operationData"
            :key="item"
            @click="item.handler"
            >{{ item.label }}</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
defineProps({
  tableHeadData: {
    type: Array,
    default: () => {},
  },
  tableData: {
    type: Array,
    default: () => {},
  },
  operationData: {
    type: Array,
    default: () => {},
  },
})
</script>

<style lang="scss" scoped></style>

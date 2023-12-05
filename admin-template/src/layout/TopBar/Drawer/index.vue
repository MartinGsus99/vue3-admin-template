<template>
  <div class="">
    <el-drawer
      v-model="drawer"
      title="I am the title"
      :direction="direction"
      :before-close="handleClose"
    >
      <span>Hi, there!</span>
    </el-drawer>
    <el-drawer v-model="drawer2" :direction="direction">
      <template #header>
        <h4>set title by slot</h4>
      </template>
      <template #default>
        <div>
          <el-radio v-model="radio1" label="Option 1" size="large"
            >Option 1</el-radio
          >
          <el-radio v-model="radio1" label="Option 2" size="large"
            >Option 2</el-radio
          >
        </div>
      </template>
      <template #footer>
        <div style="flex: auto">
          <el-button @click="cancelClick">cancel</el-button>
          <el-button type="primary" @click="confirmClick">confirm</el-button>
        </div>
      </template>
    </el-drawer>
  </div>
</template>

<script setup>
import {} from 'vue'
</script>

<style lang="scss" scoped></style>

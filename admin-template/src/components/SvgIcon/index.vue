<template>
  <div class="">
    <svg :style="style">
      <use :xlink:href="prefix+name" :fill="color"></use>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
defineProps({
    //前缀
  prefix:{
    type:String,
    default:'#icon-'
  },
  //图标名称
  name:{
    type:String,
    default:''
  },
  color:{
    type:String,
    default:'white'
  },
  style:{
    type:Object,
    default:{
        width:'20px',
        height:'20px',
    }
  }


})

</script>

<style lang="scss" scoped>
</style>

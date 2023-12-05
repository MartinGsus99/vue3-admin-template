<template>
  <div class="">
    <el-card>
      <div class="top-card">
        <div>
          <img
            class="avator"
            :src="
              userStore.avator ||
              'https://s3.bmp.ovh/imgs/2023/12/05/60498fd418563800.jpeg'
            "
          />
        </div>
        <div class="welcome">
          <h3>欢迎,{{ getTimeHelloMessage() }},{{ userStore.username }}</h3>
          <p>Martin's Manage System</p>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import {} from 'vue'
import useUserStore from '@/store/modules/user'
import { getTimeHelloMessage } from '@/utils/time'
let userStore = useUserStore()
</script>

<style lang="scss" scoped>
.top-card {
  display: flex;
  align-items: center;

  .avator {
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }

  .welcome {
    margin-left: 20px;

    h3 {
      font-size: 40px;
    }
  }
}

.cloud {
  display: flex;
  align-items: center;

  .cloud-img {
    width: 600px;
    height: 600px;
  }
}
</style>

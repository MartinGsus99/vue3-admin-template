<template>
  <div class="login-container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form
          class="login-form"
          ref="loginForm"
          :model="form"
          :rules="rules"
        >
          <h1>Login</h1>
          <h2>Welcome to your sys!</h2>
          <el-form-item prop="username">
            <el-input v-model="form.username" placeholder="Username">
              <template #prefix>
                <el-icon>
                  <User />
                </el-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="form.password"
              placeholder="Password"
              type="password"
              show-password
            >
              <template #prefix>
                <el-icon>
                  <Lock />
                </el-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              class="login-btn"
              :loading="isLoading"
              type="primary"
              @click="login"
              >登录</el-button
            >
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { User, Lock } from '@element-plus/icons-vue'
import { login } from '@/api/system/user/index.ts'
import useUserStore from '@/store/modules/user.ts'
import { useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'
import { getTimeHelloMessage } from '@/utils/time.ts'

let useStore = useUserStore()

let $router = useRouter()

let form = reactive({
  username: '',
  password: '',
})

let isLoading = ref(false)

const validateUsername = (rule: any, value: string, callback: any) => {
  //rule:规则对象 value:表单文本值 callback:回调
  console.log(value)
  if (/^\d{0,10}$/.test(value)) {
    callback()
  } else {
    callback(new Error('用户名至少需要0个字符'))
  }
}

const validatePassword = (rule: any, value: string, callback: any) => {
  //rule:规则对象 value:表单文本值 callback:回调
  if (value.length < 0) {
    callback(new Error('密码至少需要0个字符'))
  } else if (value.length > 20) {
    callback(new Error('密码最多20个字符'))
  } else {
    callback()
  }
}

const rules = ref({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { validator: validateUsername, trigger: 'change' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { validator: validatePassword, trigger: 'change' },
  ],
})

let loginForm = ref()

const login = async () => {
  loginForm.value.validate(async (valid: boolean) => {
    if (valid) {
      isLoading.value = true
      try {
        await useStore.userLogin(form)
        isLoading.value = false
        //编程式导航跳转到首页
        $router.push({ path: '/' })
        ElNotification({
          type: 'success',
          title: `${getTimeHelloMessage()}`,
          message: '登录成功',
        })
      } catch (error) {
        isLoading.value = false
        ElNotification({
          type: 'error',
          title: '出错啦~',
          message: error.message || '登录失败',
        })
      }
    }
  })
}
</script>

<style scoped lang="scss">
.login-container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/bg.jpg') no-repeat;
  background-size: cover;

  .login-form {
    width: 400px;
    height: 40vh;
    position: relative;
    top: 30vh;
    left: 50%;
    transform: translateX(-50%);
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    padding: 40px;

    h1 {
      color: rgb(188, 149, 149);
      font-size: 40px;
    }
    h2 {
      color: rgb(188, 149, 149);
      font-size: 20px;
      margin: 20px 0;
    }

    .login-btn {
      width: 100%;
    }
  }
}
</style>

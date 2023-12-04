//layout组件配置仓库

import { defineStore } from 'pinia'

let useLayoutSettingStore = defineStore('layoutSetting', {
  state: () => ({
    fold: true,
  }),
})

export default useLayoutSettingStore

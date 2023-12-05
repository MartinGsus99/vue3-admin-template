//layout组件配置仓库

import { defineStore } from 'pinia'

let useLayoutSettingStore = defineStore('layoutSetting', {
  state: () => ({
    fold: false, //侧边菜单折叠
    refresh: false, //页面刷新
  }),
})

export default useLayoutSettingStore

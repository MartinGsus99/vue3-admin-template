import SvgIcon from './SvgIcon/index.vue'

const allGlobalComponents = {
  SvgIcon,
}

export default {
  //务必叫做install
  install(app) {
    Object.keys(allGlobalComponents).forEach((key) => {
      app.component(key, allGlobalComponents[key])
    })
  },
}

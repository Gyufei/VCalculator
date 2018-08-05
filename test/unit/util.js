import Vue from 'vue'

let id = 0
const createElm = function () {
  const elm = document.createElement('div')

  elm.id = 'app' + ++id
  document.body.appendChild(elm)

  return elm
}

// 删除Vue实例
exports.destoryVm = function (vm) {
  vm.$destory && vm.$destory()
  vm.$el && vm.$el.parentNode && vm.$el.parentNode.removeChild(vm.$el)
}

// 创建一个Vue实例
exports.createVm = function (Comp, mounted = false) {
  if (Object.prototype.toString.call(Comp) === '[object String]') {
    Comp = { template: Comp }
  }

  return new Vue(Comp).$mount(mounted === false ? null : createElm())
}

// 创建一个测试组件实例
exports.createTest = function (Comp, propsData = {}, mounted = false) {
  if (propsData === true || propsData === false) {
    mounted = propsData
    propsData = {}
  }

  const elm = createElm()
  const Constructor = Vue.extend(Comp)
  return new Constructor({ propsData }).$mount(mounted === false ? null : elm)
}

import { createVm, destoryVm } from '../util'
import CalculatorPanel from '@/components/CalculatorPanel'

describe('CalculatorPanel', () => {
  let vm
  afterEach(() => {
    destoryVm(vm)
  })

  it('Panel-header-text', () => {
    vm = createVm(CalculatorPanel)
    expect(vm.$el.querySelector('header'))
      .to.property('textContent').to.include('简易计算器')
  })
})

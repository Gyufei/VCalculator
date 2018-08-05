import { createTest, destoryVm } from '../util'
import CalculatorScreen from '@/components/CalculatorScreen'

describe('CalculatorScreen', () => {
  let vm
  afterEach(() => {
    destoryVm(vm)
  })

  it('show-screen-text', () => {
    let propScreenText = '2+3=55'
    vm = createTest(CalculatorScreen, {screenText: propScreenText}, true)

    expect(vm.$el).to.property('textContent').to.be.include(propScreenText)
  })
})

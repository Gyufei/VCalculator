import { createTest, destoryVm } from '../util'
import CalculatorScreen from '@/components/CalculatorScreen'

describe('CalculatorScreen', () => {
  let vm
  afterEach(() => {
    destoryVm(vm)
  })

  it('show-screen-text', () => {
    const props = {
      screenBottomText: '2+3=',
      screenTopText: '5'
    }
    vm = createTest(CalculatorScreen, props, true)

    expect(vm.$el).to.property('textContent').to.be.include(props.screenTopText)
    expect(vm.$el).to.property('textContent').to.be.include(props.screenBottomText)
  })
})

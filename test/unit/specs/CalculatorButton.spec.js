import { createVm, destoryVm, createTest } from '../util'
import CalculatorButton from '@/components/CalculatorButton'

describe('CalculatorButton', () => {
  let vm
  afterEach(() => {
    destoryVm(vm)
  })

  it('click', done => {
    let res
    let propBtnText = 3
    vm = createVm({
      template: `
        <calculator-button 
          :btnText="btnText"
          @click="handleClick"></calculator-button>
      `,
      components: {
        CalculatorButton
      },
      data () {
        return {
          btnText: propBtnText
        }
      },
      methods: {
        handleClick (val) {
          res = val
        }
      }
    }, true)
    vm.$el.click()

    setTimeout(_ => {
      expect(res).to.be.equal(propBtnText)
      done()
    })
  })

  it('show-btn-prop-text', () => {
    let btnPropText = '1234'
    vm = createTest(CalculatorButton, {btnText: btnPropText}, true)

    expect(vm.$el).to.property('textContent').to.include(btnPropText)
  })

  it('show-btn-color', () => {
    let btnPropText = '+'
    vm = createTest(CalculatorButton, {btnText: btnPropText}, true)

    expect(vm.$el.querySelector('.btn-text span').classList.contains('colored')).to.be.true /* eslint-disable-line no-unused-expressions */
  })
})

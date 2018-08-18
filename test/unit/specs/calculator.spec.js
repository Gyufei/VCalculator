import calc from '@/utils/calculator'

describe('calculatorUtils', () => {
  it('fist-click', () => {
    const equation = '3'
    const oldEquation = ''
    const res = calc(equation, oldEquation)

    expect(res).have.property('equation').to.equal(equation)
  })

  it('first-symbol', () => {
    const equation = '3x'
    const oldEquation = ''
    const res = calc(equation, oldEquation)

    expect(res).have.property('equation').to.equal(equation)
    expect(res).have.property('oldEquation').to.be.empty
  })

  it('first-eval', () => {
    const equation = '3x5='
    const oldEquation = ''
    const res = calc(equation, oldEquation)

    expect(res).have.property('equation').to.equal('15')
    expect(res).have.property('oldEquation').to.be.equal(equation)
  })
})

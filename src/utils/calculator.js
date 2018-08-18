export default function (equation, oldEquation) {
  let calcResult = {
    equation,
    oldEquation
  }

  const lastInputStr = equation.slice(-1)
  switch (lastInputStr) {
    case 'C':
      calcResult = clearAll(calcResult)
      break
    case '=':
      calcResult = doEval(calcResult)
      break
  }

  return calcResult
}

function clearAll (calcRes) {
  calcRes.equation = ''
  calcRes.oldEquation = ''
  return calcRes
}

function doEval (calcRes) {
  calcRes.oldEquation = calcRes.equation

  let realEquation = calcRes.equation.toString().slice(0, -1)
  realEquation = parseEquation(realEquation)

  const evalResult = eval(realEquation) /* eslint-disable-line no-eval */
  calcRes.equation = evalResult.toString()

  return calcRes
}

function parseEquation (equation) {
  if (equation.includes('%')) {
    equation = equation.replace('%', '/100')
  }

  if (equation.includes('x')) {
    equation = equation.replace('x', '*')
  }

  if (equation.includes('÷')) {
    equation = equation.replace('÷', '/')
  }

  return equation
}

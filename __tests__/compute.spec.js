const compute = require('../src/compute')

test('Should add the two numbers', () => {
  const sum1 = compute(2, 3)
  if (sum1 !== 5) throw new Error('Total should be 5 but got ' + sum1)
})

test('Should add the two 3 digit-numbers', () => {
  const sum2 = compute(100, 300)
  if (sum2 !== 400) throw new Error('Total should be 5 but got ' + sum2)
})

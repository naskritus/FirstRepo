const compute = require('../src/compute')

test('Should add the two numbers', () => {
  const total = compute(2, 3)
  if (total !== 5) throw new Error('Total should be 5 but got ' + total)
})

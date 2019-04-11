var { Context } = require('../../util/context')
var { section } = require('../../util/misc')

section('Number construction')
var statements = [
  // number -> number
  '2131',
  'Number(1231)',
  'new Number(1231)',
  'parseInt(1231)',

  // null -> number
  'Number(null)',
  'new Number(null)',
  'parseInt(null)',

  // undefined -> number
  'Number()',
  'new Number()',
  'parseInt()',

  // string -> number
  `Number('1231')`,
  `new Number('1231')`,
  `parseInt('1231')`,
  `Number('123abc')`,
  `new Number('123abc')`,
  `parseInt('123abc')`,
  `parseInt('123abc', 16)`,
  `parseInt('a123abc', 10)`
]

var ctx = new Context({}, { padding: 50 })
ctx.info()
for (const s of statements) {
  ctx.info(s)
}

for (const x of statements) {
  for (const y of statements) {
    var s1 = `${x} === ${y}`
    var s2 = `${x} == ${y}`
    var a = ctx.peval(s1, true)
    var b = ctx.peval(s2, true)
    if (a !== b) {
      console.warn(`-'${x}' and '${y}' can be casted!`)
    }
  }
}

section('Handling large numbers')
ctx.peval('Number.MAX_VALUE + Number.MAX_VALUE')
ctx.peval('isNaN(Number.MAX_VALUE + Number.MAX_VALUE)')
ctx.peval('Number.MAX_VALUE + Number.MAX_VALUE')
ctx.peval('Number.MIN_VALUE')
ctx.peval('Number.MAX_SAFE_INTEGER')
ctx.peval('Number.MIN_SAFE_INTEGER')
ctx.peval('NaN === NaN')

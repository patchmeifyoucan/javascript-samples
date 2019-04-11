var { Context } = require('../util/context')
var ctx = new Context({}, { padding: 25 })

var statements = [
  'true',
  'false',

  'Boolean(true)',
  `Boolean('true')`,
  `Boolean('false')`,
  `Boolean('')`,
  `Boolean(null)`,
  `Boolean()`,
  `Boolean(0)`,
  `Boolean(1110)`,

  `new Boolean(true)`,
  `new Boolean(false)`,
  `new Boolean(0)`,
  `new Boolean('')`
]

ctx.info()
for (const s of statements) {
  ctx.info(s)
}

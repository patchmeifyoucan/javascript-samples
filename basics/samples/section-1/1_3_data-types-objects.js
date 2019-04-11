var { Context } = require('../../util/context')
var { section } = require('../../util/misc')

var constructor = new Object(null)
var literal = {}

var obj1 = {}
var obj2 = obj1

var complex = {
  prim: 3,
  obj: {
    prim: 5
  },
  x: 'I am x!'
}

section('Property access')
var x = 'prim'
var y = 'obj.prim'
var ctx = new Context({ obj1, obj2, complex })

ctx.peval('obj1 === obj2')
ctx.peval('obj1 == obj2')
ctx.peval('complex.obj.prim')
ctx.peval('complex[x]') // error
ctx.peval('complex[y]') // error
ctx.peval('complex.obj.prim')
ctx.peval('complex.obj.prim.x')
ctx.peval('complex.obj.prim.x.c') // error
ctx.peval('Object.getOwnPropertyNames(complex)')

section('Property modification')
ctx.add({ x, y })
ctx.peval('complex[x]')
ctx.peval('complex[y]')
complex[y] = 'I should be ok now.'
ctx.peval('complex[y]')

ctx.print(complex)

complex.new = 'new'
ctx.print(complex)

delete complex.obj
ctx.print(complex)

complex.circular = complex
ctx.peval('JSON.stringify(complex)') // error
ctx.peval(complex)

section('JSON string vs. JSON object')
var json = '{"a":1,"b":2}'

ctx.add({ json })

var expression1 = `json.a === json['a']`
var expression2 = `json.a === json['b']`
ctx.peval(expression1)
ctx.peval(expression2)

var parsed = JSON.parse(json)
ctx.update({ json: parsed })
ctx.peval(expression1)
ctx.peval(expression2)


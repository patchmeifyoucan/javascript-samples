var { Context } = require('../../util/context')
var { section, line } = require('../../util/util')

var ctx = new Context({}, { padding: 50 })

section('Array construction')
var array1 = new Array(5)
var array2 = new Array(5, 5)
var array3 = [5]
var array4 = [5, 5]

ctx.add({ array1, array2, array3, array4 })

ctx.peval('array1.length') // array constructor similar to other languages
ctx.peval('array2.length')
ctx.peval('array3.length')
ctx.peval('array4.length')

ctx.clear()

section('Array operations')

var array = [5]
ctx.print(array)
array.push(1)
ctx.print(array)
var last = array.pop()
ctx.print(last)
ctx.print(array)
array.unshift(1)
ctx.print(array)
array.splice(0, 2, 1, 2, 3, 4, 5)
ctx.print(array)

section('Array properties')

ctx.add({ array })

ctx.peval('Object.getOwnPropertyNames(array)')
ctx.peval(`Object.getOwnPropertyDescriptor(array, 'length')`)
ctx.peval(`Object.getOwnPropertyDescriptor(array, '0')`)

line()

ctx.peval('Object.keys(array)')
ctx.peval('array.length')

delete array.length
ctx.print(array)
delete array['0']
ctx.print(array)

ctx.peval('Object.keys(array)')
ctx.peval('array.length')

line()

ctx.peval('array.length = -5')
array.length = 10
ctx.peval('array.length')
ctx.print(array)

section('Array usage')

var defined = array.filter(function (value) {
  return !!value
})

var notDefined = array.filter(function (value) {
  return !value
})

var unique = array.filter(function (value, index, self) {
  return self.indexOf(value) === index
})

var copy = array.slice() // shallow copy

ctx.add({ array, copy })
ctx.peval('array === copy')

ctx.print(defined)
ctx.print(notDefined)
ctx.print(unique)

var numbers = [0, 1, 2, null, null, 6, 7]

var values = numbers.filter(function (n) {
  return !!n
})

var valuesES6 = numbers.filter(n => !!n)

ctx.print('values:', values)


var { Context } = require('../../util/context')
var { section } = require('../../util/util')

var lorem = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
var ctx = new Context({ lorem }, { padding: 50 })

section('Basic string operations')
ctx.peval('lorem.length')
ctx.peval(`lorem.indexOf('a')`)
ctx.peval(`lorem.lastIndexOf('a')`)

for (var i = 0; i < 10; ++i) {
  console.log(i, lorem[i])
}

ctx.peval(`lorem.replace('sed', 'SED')`) // replaces only first occurrence
ctx.peval(`lorem.replace(/sed/gi, 'SED')`) // replaces all occurrences

section('Basic string operations') // watch the console output
ctx.peval(`''.length`)
ctx.peval(`'\0'.length`)
ctx.peval(`'\0' === ''`)
ctx.peval(`'\0' === ' '`)

section('??')
var empty = ''
ctx.print(empty++)
ctx.print(empty++)
ctx.print(lorem++)
ctx.print(lorem++)

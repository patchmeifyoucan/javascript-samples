var {Context} = require('../util/context');
var {section, line} = require('../util/misc');
var ctx = new Context({}, {padding: 25});

function bool(value) {
  ctx.print(`Evaluating boolean values for: '${value}'`);

  ctx.add({value: value});
  ctx.peval(`typeof value`);
  ctx.peval(`value === false`);
  ctx.peval(`value == false`);
  ctx.peval(`value === true`);
  ctx.peval(`value == true`);
  ctx.peval(`!value`);
  ctx.peval(`!!value`);
  ctx.peval(`Boolean(value)`);

  ctx.clear();
  line();
}

section('Falsy values');
bool(null);
bool(undefined);
bool('');
bool(0);

section('Truthy values');
bool({});
bool([]);
bool(1);
bool('notanemptystring');
bool(() => {
  return `I'm a function.`
});

section('Sloppy comparison');
ctx.peval(`'1' == 1`);
ctx.peval(`'1' == true`);
ctx.peval(`1 == true`);

section('Strict comparison');
ctx.peval(`'1' === 1`);
ctx.peval(`'1' === true`);
ctx.peval(`1 === true`);

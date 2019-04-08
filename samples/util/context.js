const vm = require('vm');

function Context(sandbox = {}, options = {}) {
  this.sandbox = vm.createContext(sandbox || {});
  this.padding = options.padding || 75;
}

Context.prototype.peval = function (expr, silent = false) {
  try {
    var res = vm.runInContext(expr, this.sandbox);

    if (!silent)
      console.log(`- ${expr}:`.padEnd(this.padding, ' '), JSON.stringify(res));
    return res;
  } catch (e) {
    console.error(`- ${expr}:`.padEnd(this.padding, ' '), e.message)
    return null;
  }
};

Context.prototype.info = function (expr) {
  if (!expr) {
    return console.log(
      'expression'.padEnd(this.padding),
      'type'.padEnd(20),
      'string value'.toString().padEnd(20),
      'actual value'
    );
  }

  try {
    var res = vm.runInContext(expr, this.sandbox);
    console.log(
      `- ${expr}`.padEnd(this.padding),
      (typeof res).padEnd(20),
      res.toString().padEnd(20),
      res
    );
  } catch (e) {
    console.error(`- ${expr}:`.padEnd(this.padding, ' '), e.message)
  }
};

Context.prototype.add = function (value) {
  this.sandbox = vm.createContext({...this.sandbox, ...value});
};

Context.prototype.clear = function () {
  this.sandbox = vm.createContext({})
};

Context.prototype.remove = function (value) {
  var clone = Object.assign({}, this.sandbox);

  for (const key of Object.keys(value))
    delete clone[key];

  this.sandbox = vm.createContext(clone)

};

Context.prototype.update = function (value) {
  this.sandbox = vm.createContext(Object.assign(this.sandbox, value));
};

Context.prototype.print = o => console.log('- ' + JSON.stringify(o));

module.exports = {Context};

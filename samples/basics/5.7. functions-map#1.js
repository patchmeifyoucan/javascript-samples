// You have a list of ages as string. You want them to be numbers. Because we like numbers as they enable a lot of things.

var people = [{ age: '42' }, { age: '25' }, { age: '84' }, { age: '24' }, { age: '31' }, { age: '7' }, { age: '52' }, { age: '33' }, { age: '25' }, { age: '31' }, { age: '88' }, { age: '51' }, { age: '90' }, { age: '79' }, { age: '67' }, { age: '61' }, { age: '26' }, { age: '50' }, { age: '34' }, { age: '22' }, { age: '7' }, { age: '54' }, { age: '67' }, { age: '93' }, { age: '14' }, { age: '80' }, { age: '67' }, { age: '43' }, { age: '55' }, { age: '40' }, { age: '38' }, { age: '10' }, { age: '91' }, { age: '48' }, { age: '49' }, { age: '79' }, { age: '27' }, { age: '4' }, { age: '68' }, { age: '61' }, { age: '61' }, { age: '82' }, { age: '43' }, { age: '93' }, { age: '26' }, { age: '72' }, { age: '66' }, { age: '89' }, { age: '87' }, { age: '71' }, { age: '43' }, { age: '29' }, { age: '78' }, { age: '7' }, { age: '50' }, { age: '17' }, { age: '17' }, { age: '51' }, { age: '76' }, { age: '16' }, { age: '66' }, { age: '27' }, { age: '49' }, { age: '29' }, { age: '95' }, { age: '32' }, { age: '39' }, { age: '8' }, { age: '54' }, { age: '21' }, { age: '18' }, { age: '69' }, { age: '62' }, { age: '57' }, { age: '98' }, { age: '87' }, { age: '56' }, { age: '93' }, { age: '98' }, { age: '54' }, { age: '23' }, { age: '52' }, { age: '93' }, { age: '6' }, { age: '72' }, { age: '26' }, { age: '55' }, { age: '34' }, { age: '55' }, { age: '45' }, { age: '33' }, { age: '22' }, { age: '46' }, { age: '57' }, { age: '39' }, { age: '75' }, { age: '36' }, { age: '21' }, { age: '59' }, { age: '44' }]

var ages = []
for (var i = 0; i < people.length; ++i) {
  var p = people[i]
  var n = Number(p.age)
  ages.push(n)
} // 6 LOC

console.log(ages)

// This is bad :((

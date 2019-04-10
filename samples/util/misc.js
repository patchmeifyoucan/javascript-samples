function line () {
  console.log()
}

function section (name, c = '-') {
  if (!c) {
    throw new Error('Section needs a name!')
  }

  console.log(`\n\n${name} ${c.repeat(150 - name.length)}`)
}

module.exports = { line, section }

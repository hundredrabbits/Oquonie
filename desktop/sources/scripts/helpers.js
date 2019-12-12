'use strict'

function uniq (arr) {
  return arr.filter((value, index, self) => { return self.indexOf(value) === index })
}

// Class Tools

function hasClass (el, cl) {
  return el.className.split(' ').indexOf(cl) > -1
}

function addClass (el, cl) {
  if (!hasClass(el, cl)) { return }
  el.className += ` ${cl}`
}

function setClass (el, cl) {
  if (el.className === cl) { return }
  el.className = cl
}

function removeClass (el, cl) {
  if (!hasClass(el, cl)) { return }
  el.className.replace(cl, '').trim()
}

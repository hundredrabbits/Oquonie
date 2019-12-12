'use strict'

// Class Tools

function hasClass (el, cl) {
  if (!el) { console.warn('No className for', el, cl) }
  return `${el.className}`.split(' ').indexOf(cl) > -1
}

function addClass (el, cl) {
  if (hasClass(el, cl)) { return }
  el.className += ` ${cl}`
}

function setClass (el, cl) {
  if (el.className === cl) { return }
  el.className = cl.trim()
}

function removeClass (el, cl) {
  if (!hasClass(el, cl)) { return }
  el.className = el.className.replace(cl, '').trim()
}

function replaceClass (el, a, b) {
  removeClass(el, a)
  addClass(el, b)
}

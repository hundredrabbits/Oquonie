'use strict'

function Artbook () {
  this.asset_catalog = {}
  this.element_registry = {}
  this.element_registry_unique_id = 0
  this.class_unique_id = 0

  const stylesheet_element = document.createElement('style')
  stylesheet_element.type = 'text/css'
  stylesheet_element.title = 'artbook'
  stylesheet_element.appendChild(document.createTextNode(''))

  document.head.appendChild(stylesheet_element)

  for (let i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].title == stylesheet_element.title) {
      this.stylesheet = document.styleSheets[i]
      break
    }
  }

  this.set_art = function (selector, assetUrl) {
    if (!(assetUrl in this.asset_catalog)) {
      const className = 'artbook_' + this.class_unique_id
      this.class_unique_id++

      this.stylesheet.insertRule('.' + className + '{background-image:url(' + assetUrl + ')}', 0)
      this.asset_catalog[assetUrl] = className
    }

    const id = this.get_element_id(selector)

    if (id == null) {
      console.warn('no element for selector ' + selector)
    }

    if (id in this.element_registry) {
      if (this.element_registry[id] == assetUrl) {
        return
      }
      this.remove_art(selector)
    }
    this.element_registry[id] = assetUrl
    $(selector).addClass(this.asset_catalog[assetUrl])
  }

  this.remove_art = function (selector) {
    const id = this.get_element_id(selector)
    if (id in this.element_registry) {
      const assetUrl = this.element_registry[id]
      if (assetUrl in this.asset_catalog) {
        $(selector).removeClass(this.asset_catalog[assetUrl])
      }
      delete this.element_registry[id]
    }
  }

  this.get_element_id = function (selector) {
    const element = $(selector)[0]

    if (element == null) {
      return null
    }

    if (!element.hasOwnProperty('artbook_id')) {
      if (element.hasOwnProperty('id')) {
        element.artbook_id = element.id
      } else {
        element.artbook_id = 'artbook_id_' + this.element_registry_unique_id
        this.element_registry_unique_id++
      }
    }
    return element.artbook_id
  }
}

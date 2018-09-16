"use strict";

function Artbook()
{
  this.asset_catalog = {};
  this.element_registry = {};
  this.element_registry_unique_id = 0;
  this.class_unique_id = 0;

  let stylesheet_element = document.createElement("style");
  stylesheet_element.type = "text/css";
  stylesheet_element.title = "artbook";
  stylesheet_element.appendChild(document.createTextNode(""));
  
  document.head.appendChild(stylesheet_element);

  for(let i = 0; i < document.styleSheets.length; i++)
  {
    if (document.styleSheets[i].title == stylesheet_element.title)
    {
      this.stylesheet = document.styleSheets[i];
      break;
    }
  }

  this.set_art = function(selector, asset_url)
  {
    if (!(asset_url in this.asset_catalog))
    {
      let className = "artbook_" + this.class_unique_id;
      this.class_unique_id++;
      
      this.stylesheet.insertRule("." + className + "{background-image:url("+asset_url+")}", 0);
      this.asset_catalog[asset_url] = className;
    }

    let id = this.get_element_id(selector);

    if (id == null)
    {
      console.warn("no element for selector " + selector);
    }

    if (id in this.element_registry)
    {
      if (this.element_registry[id] == asset_url)
      {
        return;
      }
      this.remove_art(selector);
    }
    this.element_registry[id] = asset_url;
    $(selector).addClass(this.asset_catalog[asset_url]);
  }

  this.remove_art = function(selector)
  {
    let id = this.get_element_id(selector);
    if (id in this.element_registry)
    {
      let asset_url = this.element_registry[id];
      if (asset_url in this.asset_catalog) {
        $(selector).removeClass(this.asset_catalog[asset_url]);
      }
      delete this.element_registry[id];
    }
  }

  this.get_element_id = function(selector)
  {
    let element = $(selector)[0];

    if (element == null)
    {
      return null;
    }

    if (!element.hasOwnProperty("artbook_id"))
    {
      if (element.hasOwnProperty("id"))
      {
        element.artbook_id = element.id;
      }
      else
      {
        element.artbook_id = "artbook_id_" + this.element_registry_unique_id;
        this.element_registry_unique_id++;
      }
    }
    return element.artbook_id;
  }
}

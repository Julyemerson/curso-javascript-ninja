(function(win, doc){
  'use strict';

  function DOM(elements){
    this.element = doc.querySelectorAll(elements);
  };

  DOM.prototype.on = function on(eventType, callback){
    Array.prototype.forEach.call(this.element, function(element){
      element.addEventListener(eventType, callback, false);
    })
  };

  DOM.prototype.off = function off(eventType, callback){
    Array.prototype.forEach.call(this.element, function(element){
      element.removeEventListener(eventType, callback, false);
    })
  };

  DOM.prototype.get = function get(){
   return this.element
  };

  DOM.prototype.forEach = function forEach(){
      return Array.prototype.forEach.apply(this.element, arguments)
  }

  DOM.prototype.map = function map(){
    return Array.prototype.map.apply(this.element, arguments)
  }

  DOM.prototype.filter = function filter(){
      return Array.prototype.filter.apply(this.element, arguments)
  }

  DOM.prototype.reduce = function reduce(){
      return Array.prototype.reduce.apply(this.element, arguments)
  }

  DOM.prototype.reduceRight = function reduceRight(){
      return Array.prototype.reduceRight.apply(this.element, arguments)
  }

  DOM.prototype.every = function every(){
      return Array.prototype.every.apply(this.element, arguments)
  }

  DOM.prototype.some = function some(){
      return Array.prototype.some.apply(this.element, arguments)
  }

  DOM.is = function(obj){
    return {
        tipo: Object.prototype.toString.call(obj),
        Nome: Object.prototype.toString.call(obj)
            .split(' ')[1]
            .split(']')[0]
    }
  };
})(window, document)

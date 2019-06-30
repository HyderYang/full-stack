// 先进后出/后进先出

function Stack(){
  var items = [];
  var minItem = null;

  this.push = function(item) {
    items.push(item);
    putMin(item);
  };

  this.pop = function() {
    return items.pop();
  };

  this.top = function() {
    return items[items.length - 1];
  };

  this.isEmpty = function() {
    return items.length === 0;
  };

  this.size = function() {
    return items.length;
  };

  this.clear = function() {
    items = [];
  };

  this.min = function() {
    return minItem;
  };

  var putMin = function(item) {
    if (minItem === null) {
      minItem = item;
    } else if (minItem != null && minItem > item) {
      minItem = item;
    }
  }
}

module.exports = Stack;




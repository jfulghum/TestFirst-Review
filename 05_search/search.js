function search(func){
  var bool = false
  this.forEach(function(element){
    if (func(element)){
      bool = true;
    } else if (Array.isArray(element) console.dir();){
      bool = search.call(element, func)
    }
  });
  return bool;
}

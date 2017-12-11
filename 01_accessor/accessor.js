function accessor(object){
  return function(a, b){
    if (b !== undefined){
        object[a] = b;
    } else {
      return object[a];
    }
  }
}
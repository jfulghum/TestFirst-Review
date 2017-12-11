function filter(array, func){
  var filteredArr = [];
  for (var i = 0; i < array.length; i++){
    if (func(array[i])) {
      filteredArr.push(array[i]);
    }
  }
  return filteredArr;
}
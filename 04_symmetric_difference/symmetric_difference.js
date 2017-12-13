function difference(arr1, arr2){
  return arr1.filter(function(element){
    return arr2.indexOf(element) < 0;
  })
}

function symmetricDiff(arr1, arr2){
  var diff1 = difference(arr1, arr2);
  var diff2 = difference(arr2, arr1);
  return diff1.concat(diff2)
}
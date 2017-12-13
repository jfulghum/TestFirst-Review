
function sometimes(func){
  i = 0 
  return function(){
    while (i++ < 3 || (i > 4 && i % 2 !== 0)){
      return func.apply(this, arguments)
    }
    return "I do not know!"
  }
}

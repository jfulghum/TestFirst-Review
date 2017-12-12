
function sometimes(func){
  count = 0;
  return function (){
    while (count < 3 || (count >= 3 && (count % 2 === 0))){
      count++
      return func.apply(this, arguments)
    } 
     while (count >= 3 && (count % 2 !== 0)){
      count++
      return "I do not know!";
    } 
  }
}
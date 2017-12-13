function rotater(string){
  return function rotate(num){
    if (num > string.length){
      rotated = num % string.length
      string.slice((string.length - rotated), string.length).concat(string.slice(0, rotated))
    }
    return (string.slice(string.length - num, string.length))
  }
}
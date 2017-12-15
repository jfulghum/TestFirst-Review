function translate(sentence){
  var vowels = ["a", "e", "i", "o", "u", "qu"]
  return sentence.split(" ").map(function(word){
  for(var letterIndex = 0; letterIndex < word.length; letterIndex++){
      if(vowels.includes(word[letterIndex]) && word[letterIndex - 1] !== "q"){
        index = letterIndex
        break // save index and move on at first vowel.
      }
    }
    return word.slice(index, word.length) + word.slice(0, index) + "ay"
  }).join(" ")
}

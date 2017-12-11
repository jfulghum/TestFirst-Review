function translate(sentence){
  var words = sentence.split(" ");
  var resultArr = []
  var vowels = "aeiou";
  return words.map(function(word){
    for (var letterIndex = 0; letterIndex < word.length; letterIndex++){
      if (vowels.search(word[letterIndex]) !== -1) { // if letter is a consonant
        if(word[letterIndex] !== "u" || (word[letterIndex] === "u" && word[letterIndex-1] !== "q")){
          index = letterIndex;
          break;
        }
      }
    }
    return word.slice(index, word.length) + word.slice(0, index) + 'ay'
  }).join(" ");
}      
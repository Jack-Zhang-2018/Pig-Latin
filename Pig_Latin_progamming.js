//PSEUDOCODE
//
// //Declare a named function that takes in a word or whole sentence as a string, and returns the Pig Latin version of the sentence or word which will be a string.
// function pigLatin(originalString){
//
// }
// //Declare a new array to store pig latinafied words
// function pigLatin(originalString){
//   let latinafied = []
// }
// //If the argument is a sentence, split the sentence into individual words at the spaces and store each word as an element in an array.
// function pigLatin(originalString){
//   let latinafied = []
//   let splitString = originalString.split(" ")
// }
//Loop through the array to access each individual word.
//If a word starts with either a, e, i, o, or u, add "way" to the end of the word
//If a word starts with anything else (i.e. a consonant) remove the first series of consonants to the end of the word and add  "ay"










function pigLatin(originalString){
  let result = []
  let splitString = originalString.split(" ")
  let latinafied = splitString.map(function(word){

      let vowels = ["a", "e", "i", "o", "u"]
      if (word[0] == "a" || word[0] == "e" || word[0] == "i" || word[0] == "o" || word[0] == "u"){
            console.log(word + "way")
            result.push(word + "way")
      } else{
        let index = 0  //This represents the index of the first vowel
        while(true) {
          if (vowels.includes(word[index])){
            break
          }
        index++
        }
        let split_word = word.split("")
        let beginning = split_word.splice(0,index)
        result.push(split_word.join('') + beginning.join('') + "ay")
        // return split_word.join('') + beginning.join('') + "ay"
        console.log(split_word.join('') + beginning.join('') + "ay");
      }
    })  

pigLatin("Hello lets go out for a walk and get some apples")



//Add the pig latinafied words into a new array and return as a string
// function WordProcessor(word){
//   let vowels = ["a", "e", "i", "o", "u"]
//   if (word[0] == "a" || word[0] == "e" || word[0] == "i" || word[0] == "o" || word[0] == "u"){
//     console.log(word + "way")
//   } else{
//     let index = 0  //This represents the index of the first vowel
//     while(true) {
//       if (vowels.includes(word[index])){
//         break
//       }
//     index++
//     }
//     //At this point of the code, we know the index of the first vowel in the word.  Now what?
//     // console.log(index + "is the index");
//
//     let split_word = word.split("")
//     let beginning = split_word.splice(0,index)
//     // console.log(split_word);
//     // console.log(beginning);
//
//     // console.log(word.join(''))
//     // console.log(beginning.join(''))
//
//     return split_word.join('') + beginning.join('') + "ay"
//   }
// }
//
// // Remove all of the letters/index before the first vowel and store it into a variable
// // Add removed letters + "ay" to the end of the edited words
//
//
//
//
//
//
//
//







//space

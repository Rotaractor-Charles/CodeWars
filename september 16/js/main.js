// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Examples:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
// However, the arrays can have varying lengths, not just limited to 4.
const binaryArrayToNumber = arr => {
  arr=arr.join('');
  return parseInt(arr,2);
};
console.log(binaryArrayToNumber([0,0,0,1]))

// Description:
// Write a function to split a string and convert it into an array of words.

// Examples (Input ==> Output):
// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
function stringToArray(string){
    return string.split(' ') 
}

// Description:
// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, 
// neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.
function disemvowel(str) {
    let strSplit=str.split(' ');
    let splitElements=strSplit.map(element=>{
        let elementString=element.split('');
        let vowels=['a', 'e', 'i', 'o', 'u','A','E','I','O'];
        let removeVowels=elementString.map(item=>{
            if(!vowels.includes(item)){
                return item
            }
        })
        return removeVowels.join('')
    
    })
  return splitElements.join(' ');
}
console.log(disemvowel("This website is for losers LOL!"))
//BETTER VERSION
function disemvowel(str) {
    let strSplit = str.split(' ');
    let splitElements = strSplit.map(element => {
        let elementString = element.split('');
        let vowels = ['a', 'e', 'i', 'o', 'u','A','E','U','I','O'];
        let removeVowels = elementString.filter(item => !vowels.includes(item));
        return removeVowels.join('');
    });
    return splitElements.join(' ');
}

console.log(disemvowel("This website is for losers LOL!"));
//shorter version straight to the point
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}

// Description:
// Create a function with two arguments that will return an array of the first n multiples of x.

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array or list ( depending on language ).

// Examples
// x = 1, n = 10 --> [1,2,3,4,5,6,7,8,9,10]
// x = 2, n = 5  --> [2,4,6,8,10]
function countBy(x, n) {
  let z = [];
    for(let i=1;i<=n;i++){
        let results=x*i
        z.push(results)
    }
  return z;
}

console.log(countBy(1,10))
// Write a function that removes the spaces from the string, then return the resultant string.

// Examples (Input -> Output):

// "8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
// "8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
// "8aaaaa dddd r     " -> "8aaaaaddddr"
function noSpace(x){
return x.split(' ').join('')
}

// Description:
// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

// Example(Input1, Input2 --> Output):

// 6, 10 --> 32
// 3, 3 --> 9
// Note: for the purposes of this kata you will assume that it is a square if its length and width are equal,
//  otherwise it is a rectangle.
const areaOrPerimeter = function(a , b) {
  if(a===b){
    return a*b
  }else{
    return 2*(a+b)
  }

}
console.log(areaOrPerimeter(6,10))

//easier and shorter version
function AP(a,b){
    return a==b? a*b:2*(a+b)
}

console.log(AP(3,3))


// Description:
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a 
// function that determines whether a string that contains only letters is an isogram. Assume 
// the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)
function isIsogram(str){
    let strLower=str.toLowerCase()
    let splitStr=strLower.split('')
      return new Set(splitStr).size === splitStr.length;

}
console.log(isIsogram("Charles"))

// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

function findOdd(A) {
  
}
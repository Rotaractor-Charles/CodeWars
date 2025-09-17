// Given two integers a and b, which can be positive or negative, find the sum 
// of all the integers between and including them and return it. If the two 
// numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
// Your function should only return a number, not the explanation about how you get that number.
function getSum(a, b)
{
   let maxi=Math.max(a,b)
   let mini=Math.min(a,b)
   let arrayOfNumbersBetween=[]
   for(let i=mini;i<=maxi;i++){
    arrayOfNumbersBetween.push(i)
   }
   return arrayOfNumbersBetween.reduce((sum,current)=>sum+current,0)
}
// Description:
// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.
function findShort(s){
    let arrayOfstringLength=s.split(' ').map(item=>{
        return item.split('').length
    })
   let sortedArray=arrayOfstringLength.sort((a,b)=>a-b)
   return sortedArray[0]
}
console.log(findShort("Charles Kamau Macharia"))


//shorter version
// function findShort(s){
//     return Math.min(...s.split(" ").map (s => s.length));
// }

// Given a non-empty array of integers, return the result of 
// multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
function grow(x){
return x.reduce((product,current)=>product*current,1)
}
console.log(grow( [1, 2, 3, 4]))
// Description:
// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]
function maps(x){
    return x.map(item=>item*2)
}
// Description:
// A hero is on his way to the castle to complete his mission. However, 
// he's been told that the castle is surrounded with a couple of powerful dragons! 
// each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets 
// he should carry.. Assuming he's gonna grab a specific given number of bullets and 
// move forward to fight another specific given number of dragons, will he survive?

// Return true if yes, false otherwise :)
function hero(bullets, dragons){
    let numberOfDragonToBeDefeated=bullets/2
    if(numberOfDragonToBeDefeated>=dragons){
        console.log(true)
    } else{
        console.log(false)
    }
}
hero(11,5)
// Description:
// Write a function, persistence, that takes in a positive parameter num and returns 
// its multiplicative persistence, which is the number of times you must multiply the 
// digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit, there 
//     are 3 multiplications)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2, 
//     there are 4 multiplications)
// 4 --> 0 (because 4 is already a one-digit number, there is no multiplication)
function persistence(num) {
    num = num.toString();   // fix: call toString()
    let productArray = [];
    let tempArray = num.split("");  // fix: split into digits

    for (;;) {
        if (tempArray.length === 1) { // stop when single digit
            break;
        }

        // multiply digits
        let product = tempArray.reduce((prod, current) => prod * Number(current), 1);
        productArray.push(product);

        // prepare next loop
        tempArray = product.toString().split("");
    }

    console.log(productArray.length);
    return productArray.length; // return instead of just logging
}

console.log(persistence(999)); // 4

// Implement a function that accepts 3 integer values a, b, c. The function 
// should return true if a triangle can be built with the sides of given length 
// and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

// Examples:

// Input -> Output
// 1,2,2 -> true
// 4,2,3 -> true
// 2,2,2 -> true
// 1,2,3 -> false
// -5,1,3 -> false
// 0,2,3 -> false
// 1,2,9 -> false 
function isTriangle(a,b,c){
if((a+b>c && a+c>b && b+c>a) && (a>0 && b>0 && c>0)){
    return true
} else{
   return false;
}
}
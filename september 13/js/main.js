// Our football team has finished the championship.
// Our team's match results are recorded in a collection 
// of strings. Each match is represented by a string in 
// the format "x:y", where x is our team's score and y is 
// our opponents score.
// For example: ["3:1", "2:2", "0:1", ...]
// Points are awarded for each match as follows:
// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection 
// and returns the number of points our team (x) got in the 
// championship by the rules given above.
// Notes:
// our team always plays 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4
function points(games) {
  let extractGames=games.map(item =>{
    let ourGoals=item.charAt(0);
    ourGoals=Number(ourGoals)
    let opponentsGoals=item.charAt(2);
    opponentsGoals=Number(opponentsGoals)
    if(ourGoals>opponentsGoals){
        return 3
    } else if(ourGoals<opponentsGoals){
        return 0
    } else{
        return 1
    }
  })
  let results=extractGames.reduce((sum,current)=>sum+current,0)
  return results
}

let scores = [
  "3:1",
  "2:2",
  "0:1",
  "4:0",
  "1:3",
  "2:0",
  "1:1",
  "5:2",
  "0:0",
  "3:3"
];

console.log(points(scores))


//code as fast as you can. you need to write a function that takes in and
//integer, double it and return the results
function doubleInt(i){
    return i*2;
}
console.log(doubleInt(9))


// Given a random non-negative number, you have to return the digits of this number 
// within an array in reverse order.

// Example (Input => Output):
// 35231 => [1,3,2,5,3]
// 0     => [0]

function digitize(n) {
  n=n.toString()
  return n.split('').reverse().map(item=>+item)

}
console.log(digitize(3456543))

// Create a function that returns the sum of the two lowest positive numbers given an array of 
// minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

function sumTwoSmallestNumbers(numbers) {  
  if(numbers.length>=4){
    let sortedArray=numbers.sort((a,b)=>a-b)
    return sortedArray[0]+sortedArray[1]
  }
}

let array=[10, 343445353, 3453445, 3453545353453]
console.log(sumTwoSmallestNumbers(array))

// Grade book
// Complete the function so that it finds the average of the three 
// scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for 
// negative values or values greater than 100.

function getGrade (s1, s2, s3) {
  let average=(s1+s2+s3)/3
  if(average>=90 && average<=100){
    return "A"
  } else if(average>=80 && average<90){
    return "B"
  } else if(average>=70 && average<80){
    return "C"
  }else if(average>=60 && average<70){
    return "D"
  } else {
    return "F"
  }
}
console.log(getGrade(55,78,90))

// Summation
// Write a program that finds the summation of every number from 1 to num 
// (both inclusive). The number will always be a positive integer greater than 0. 
// Your function only needs to return the result, what is shown between parentheses 
// in the example below is how you reach that result and it's not part of it, see the sample tests.

// For example (Input -> Output):

// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
var summation = function (num) {
  let arrayOfNumbers=[]
  for(let i=1;i<=num;i++){
    arrayOfNumbers.push(i)
  }
  return arrayOfNumbers.reduce((sum,current)=>sum+current,0)
}

console.log(summation(8))

// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000
// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59
function past(h, m, s){
  return (h*3600000)+(m*60000)+(s*1000)
}

console.log(past(1,1,1))
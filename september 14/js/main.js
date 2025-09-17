// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
function accum(s){
    return s.split('').map((item,i)=>item.toUpperCase()+item.toLowerCase().repeat(i)).join('-')
}
console.log(accum("abcd"))

// Nathan loves cycling.
// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres 
// of water per hour of cycling.
// You get given the time in hours and you need to return the number of litres 
// Nathan will drink, rounded down.
// For example:
// time = 3 ----> litres = 1
// time = 6.7---> litres = 3
// time = 11.8--> litres = 5
function litres(time) {
    let results=time*0.5
  return Math.floor(results);
}

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
// Examples:
// Inputs: "abc", "bc"
// Output: true
// Inputs: "abc", "d"
// Output: false
function check(str,ending){
    return str.endsWith(ending)
}
console.log(check("Charles","les"))

// Description:
// Implement a function that computes the difference between two lists. The function should 
// remove all occurrences of elements from the first list (a) that are present in 
// the second list (b). The order of elements in the first list should be preserved in the result.

// Examples
// If a = [1, 2] and b = [1], the result should be [2].

// If a = [1, 2, 2, 2, 3] and b = [2], the result should be [1, 3].
function arrayDiff(a, b) {
  return a.filter(element=>!b.includes(element))
}
a = [1, 2] 
b = [1]
console.log(arrayDiff(a,b))

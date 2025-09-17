// Check to see if a string has the same amount of 'x's and 'o's. The method must return 
// a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false
function XO(str) {
    let strX=[]
    let strO=[]
    let strTest=str.split('').map(item=>{
        if(item=='x' || item=='X'){
            strX.push("true")
        }else if (item =='o' || item =='O'){
            strO.push("true")
        }
    })
    if(strO.length===strX.length){
        return true
    } else {
        return false
    }
}
console.log(XO('ooXXx'))

// easier alternative
// function XO(str) {
//   let x = str.match(/x/gi);
//   let o = str.match(/o/gi);
//   return (x && x.length) === (o && o.length);
// }
// Story
// Ben has a very simple idea to make some profit: he buys something and sells it again. 
// Of course, this wouldn't give him any profit at all if he was simply to buy and sell 
// it at the same price. Instead, he's going to buy it for the lowest possible price and 
// sell it at the highest.

// Task
// Write a function that returns both the minimum and maximum number of the given list/array.

// Examples (Input --> Output)
// [1,2,3,4,5] --> [1,5]
// [2334454,5] --> [5,2334454]
// [1]         --> [1,1]
// Remarks
// All arrays or lists will always have at least one element, so you don't need to check the 
// length. Also, your function will always get an array or a list, you don't have to check 
// for null, undefined or similar.

function minMax(arr){
  let arrMinMax=arr.sort((a,b)=>a-b)
  let arrNew=[]
  arrNew.push(arrMinMax[0])
 let max=arrMinMax.slice(-1)
 return arrNew.concat(max)
}
console.log(minMax([1,4,5,6]))

// function minMax(arr){
//   return [Math.min(...arr), Math.max(...arr)];
// }

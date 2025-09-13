
// Your task is to make a function that can take any non-negative integer as an argument and 
// return it with its digits in descending order. Essentially, rearrange the digits to create 
// the highest possible number.
function descendingOrder(n){
  if(n>0){
    n=n.toString()
    let splitNumber=n.split('').map(item=>+item).sort((a,b)=>b-a).join('')
    splitNumber=Number(splitNumber)
    return splitNumber
  } else{
    return 0
  }

}
console.log(descendingOrder(-89761100))

// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 
// 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.
function validatePIN (pin) {
  let pinString=pin.toString();
  let pinSplit=pinString.split('');
  if(pinSplit.length==4 || pinSplit.length==6){
     if(pinSplit.every(ch => ch >= '0' && ch <= '9')){
      return true;
    } 
    else{
      return false
    }
  }else{
    return false
  }

}
console.log(validatePIN(1234))

///create a fakebin that takes in a string and changes numbers below 5 to 0 and numbers above 5 to 1
function fakeBin(x){
  let splitDigit=x.split('')
  let replaceWords=splitDigit.map(item=>{
    if(+item<5){
      return '0'
    } else if(+item>=5){
      return '1'
    } else{
      return item
    }
  })
  return replaceWords=replaceWords.join('')
}
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". 
// Input will always be valid, i.e. no negative integers.
var countSheep = function (num){
  let murmur=[]
  for(let i=1;i<=num;i++){
    murmur.push(`${i} sheep...`)
  }
  return murmur.join("")
}
console.log(countSheep(5))

// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language )
//  that receive a list of integers as input, and 
// return the largest and lowest number in that list, respectively. Each function returns one number.
var min = function(list){
    let minNumber=Math.min(...list)
    return minNumber;
}

var max = function(list){
    let maxNumber=Math.max(...list)
    return maxNumber;
}
list=[-52, 56, 30, 29, -54, 0, -110]

// You were camping with your friends far away from home, but when 
// it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! 
// You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

// Considering these factors, write a function that tells you if it is possible to get to the pump or not.

// Function should return true if it is possible and false if not.

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  let distance=fuelLeft*mpg;
  if(distance>=distanceToPump){
    return true
  }else{
    return false
  }
};

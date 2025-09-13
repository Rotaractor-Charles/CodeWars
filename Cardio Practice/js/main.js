// Get your shorts on - this is an array workout!
    // ## Array Cardio Day 1

    // Some data we can work with

    const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];

    const people = [
      'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
      'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
      'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
      'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
      'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
    ];
    
    // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's
    let filterYearBorn=inventors.filter(item=>item.year>1500 && item.year<1600)
    console.log(filterYearBorn)
    // Array.prototype.map()
    // 2. Give us an array of the inventors first and last names
    let inventorsFirstAndLastName=inventors.map(item=>item.first +" "+item.last)
    console.log(inventorsFirstAndLastName)
    // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest
    let sortedByBirthdate=inventors.sort((a,b)=>a.year-b.year)
    console.log(sortedByBirthdate)
    // Array.prototype.reduce()
    // 4. How many years did all the inventors live all together?
    let sumOfInventorsAge=inventors.reduce((sum,current)=>sum+(current.passed-current.year),0)
    console.log(sumOfInventorsAge)
    // 5. Sort the inventors by years lived
    let sortByInventorsbyYearsLived=inventors.sort((a,b)=>(a.passed-a.year)-(b.passed-b.year))
    console.log(sortByInventorsbyYearsLived)
    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
   // 1. Grab the container element where the boulevard names live
    const category = document.querySelector('.mw-category');
    // 2. Get all <a> elements inside it
    const links = Array.from(category.querySelectorAll('a'));
    // 3. Extract just the text (the actual boulevard names)
    const boulevardNames = links.map(link => link.textContent);
    // 4. Filter those that include 'de'
    const boulevardsWithDe = boulevardNames.filter(name => name.includes('de'));
    console.log(boulevardsWithDe);


    // 7. sort Exercise
    // Sort the people alphabetically by last name
    people.sort((a, b) => {
  let lastA = a.split(',')[1].trim(); // take part after the comma
  let lastB = b.split(',')[1].trim();
  return lastA.localeCompare(lastB);
});

console.log(people);
    // 8. Reduce Exercise
    // Sum up the instances of each of these
 const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
  let sumOfInstances=data.reduce((sum,current)=>{
    if(!sum[current]){
      sum[current]=0
    }
    sum[current]++;
    return sum;
  },{})
console.log(sumOfInstances)
//Practice
const peopleNames = [
  "Alexander, Mary Jane",
  "Johnson, Peter Paul",
  "O'Connor, Anna Maria",
  "Smith, John David",
  "Williams, Sarah Louise",
  "Brown, Michael Andrew",
  "Taylor, Emma Grace",
  "Clark, Robert James",
  "Walker, Elizabeth Ann",
  "Hall, Christopher Lee",
  "Allen, Patricia Rose",
  "Young, Daniel Thomas",
  "King, Jennifer Lynn",
  "Scott, William Henry",
  "Green, Laura Michelle",
  "Adams, Charles Edward",
  "Nelson, Margaret Claire",
  "Carter, Anthony Joseph",
  "Mitchell, Rebecca Susan",
  "Roberts, Brian Alexander"
];
//the above array has "lastname, firstname secondname"
let FirstAndSecondName=peopleNames.map(item=>{
  return item.split(',')[1].trim()
})
let secondName=FirstAndSecondName.map(item=>{
  return splitFirstAndSecondName=item.split(" ")[1]
})
console.log(secondName)

const fruits = [
  "apple", "banana", "apple", "orange", "banana", "apple",
  "mango", "apple", "orange", "banana", "mango", "pear", "pear"
];
let sumOfEachTypeOfFruit=fruits.reduce((sum,current)=>{
  if(!sum[current]){
    sum[current]=0;
  }
  sum[current]++;
  return sum;
},{})
console.log(sumOfEachTypeOfFruit)
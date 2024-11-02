// console.log("Program 1");

// const isEligibleToVote = (age) => age>=18?'Eligible to vote':'Not eligible to vote';

// console.log(isEligibleToVote(20)) // Eligible to vote
// console.log(isEligibleToVote(18)) // Eligible to vote
// console.log(isEligibleToVote(17)) // Not eligible to vote

// console.log("Program 2");

// const isGreater = (a,b) => a>b? `${a} is greater than ${b}`:`${b} is greater than ${a}`

// console.log(isGreater(2, 5)) // 5 is greater than 2
// console.log(isGreater(10, 5)) // 10 is greater than 5

// console.log("Program 5");

// const checkForAlphabetA = (name) => name.toLowerCase().includes("a")?'Includes a':'Does not include a'; 

// console.log(checkForAlphabetA("Tanay")) // Includes a 
// console.log(checkForAlphabetA("Jeep")) // Does not include a 
// console.log(checkForAlphabetA("Jane"))

// console.log("Program 8");

// const isHelloPresent = (word) => word.toLowerCase().split(" ").includes("hello");

// console.log(isHelloPresent("Hello World")) // true
// console.log(isHelloPresent("World")) // false


// console.log("Program 11");

// const product = {
//     title: "iPhone",
//     price: 5999,
//     description: "The iPhone is a smartphone developed by Apple"
//   }

// const {title,price,description} = product;

// console.log(title,price,description);

// console.log("Program 12");

// const getBookDetails = (book) => book.pages > 100

// const book = {
//     author:"James Clear",
//     title: "Atomic Habits",
//     pages: 120
// }

// console.log(getBookDetails(book));

console.log("Program 13");

const person = {
    name: 'Amit', age: 25, occupation: 'Software Engineer' 
}

const changeOccupation = (person, newOccupation) => person['occupation'] = newOccupation;

console.log(person);
changeOccupation(person, 'Product Manager');
console.log(person);

console.log("Program 15");

// function defaultParamsFunc(a, b, c) {
//     if (c === undefined) {
//         c = 4;
//     }
//     return a * b * c;
//     };

// const defaultParamsFunc = (a,b,c=4) => a*b*c;
//     console.log(defaultParamsFunc(3, 1)); // 12
//     console.log(defaultParamsFunc(3, 10)); // 120
//     console.log(defaultParamsFunc(3, 10, 5)); // 150

// console.log("Question set 2");

// console.log("Program 5");

// // Swap the values of two variables using array destructuring.

// let a = 1;
// let b = 2;
// // Your ES6 Code here

// [a,b] = [b,a];

// console.log(a) // 2
// console.log(b) // 1

// console.log("Program 7");

// const combineObjects = (obj1,obj2) => ({...obj1,...obj2})

// const obj1 = {a: 1, b: 2};
// const obj2 = {c: 3, d: 4};
// const combinedObj = combineObjects(obj1, obj2);
// console.log(combinedObj);

// console.log("Question set 3");

// console.log("Program 4")

// const pickFirstAndSecond = ([first,second,...arr]) => ({first:first , second:second})
    
// console.log(pickFirstAndSecond(["grapes", "banana", "apple"]))

// console.log("Program 7")

// const printLastFive = ([first,second, ...arr])=> [...arr];

// console.log(printLastFive([0, 1, 1, 2, 3, 5, 8]))

// console.log("Question set 4");

// console.log("Program 8")

// function checkForTeam (obj){
//     if(obj['team'] === undefined){
//         return {
//             firstName: obj.firstName,
//             lastName: obj.lastName,
//             team: 'A'
//         }
//     }
//     return obj;
// }

// console.log(checkForTeam({firstName: 'Penn', lastName: 'Ma'}))
// console.log(checkForTeam({firstName: 'John', lastName: 'Dee', team: 'B'}))
// console.log(checkForTeam({firstName: 'Priya', lastName: 'Raj'}))

// console.log('program 9');

// const book = { 
//     title: 'JavaScript: The Definitive Guide',  
//     authors: [
//         { name: 'David Flanagan', age: 49 }, 
//         { name: 'Yukihiro Matsumoto', age: 57 }
//     ],  
//     publisher: { name: 'O\'Reilly Media', location: 'CA' }
// };

// // Destructuring
// const { title } = book;
// const { authors } = book;
// const { name:author1 } = authors[0];
// const { name: author2 } = authors[1];
// const { name: publisherName } = book.publisher;

// console.log(title); // JavaScript: The Definitive Guide
// console.log(author1); // David Flanagan 
// console.log(author2); // Yukihiro Matsumoto
// console.log(publisherName); // O'Reilly Media

console.log("Function Programming")
console.log("Question set 1");

// Write an ES6 function that takes an array of objects representing people and returns an array of their ages using the map method.

// Your ES6 function here

const getAges = (people) => people.map(p=>p.age)

const people = [
  { name: 'Ankit', age: 25 },
  { name: 'Vinit', age: 24 },
  { name: 'Shashi', age: 29 }
];
const ages = getAges(people);
console.log(ages); // Output: [25, 24, 29]

console.log("Program 10");

const filterByCityAndAge = (people) => people.filter(p=>p.city==="Indore" && p.age>70);

const people1 = [
    { name: 'Ridhima', age: 75, city: 'Indore' },
    { name: 'Akshay', age: 60, city: 'Delhi' },
    { name: 'Udit', age: 80, city: 'Indore' },
      { name: 'Venki', age: 80, city: 'Bangalore' }
  ];
  const filteredPeople = filterByCityAndAge(people1);
  console.log(filteredPeople); 
  // Output: [{ name: 'Ridhima', age: 75, city: 'Indore' }, { name: 'Udit', age: 80, city: 'Indore' }]
  
//   Write an ES6 function that takes an array of objects representing students with properties name and grade. Return the first student object that has a grade of "A".

console.log("Question set 2");
console.log("Program 9")

const students = [
  { name: "John", grade: "B" },
  { name: "Mary", grade: "A" },
  { name: "Sam", grade: "C" },
  { name: "Sarah", grade: "A" },
];

// Your code here

const findStudentWithGradeA = (stud) => stud.find(st=>st.grade==='A')

const studentWithGradeA = findStudentWithGradeA(students);
console.log(studentWithGradeA); 
// Output: { name: "Mary", grade: "A" }

console.log('Program 12');

// Write an ES6 function that takes an array of objects containing Bollywood movie information (title, director, year, rating) 
// and returns an array with only the movie titles that were made before 1990 and has a rating above 8.0.

const bollywoodMovies = [
  { title: 'Sholay', director: 'Ramesh Sippy', year: 1975, rating: 8.2 },
  { title: 'Amar Akbar Anthony', director: 'Manmohan Desai', year: 1977, rating: 7.6 },
  { title: 'Namak Halaal', director: 'Prakash Mehra', year: 1982, rating: 7.4 },
  { title: 'Mr. India', director: 'Shekhar Kapur', year: 1987, rating: 7.8 },
  { title: 'Qayamat Se Qayamat Tak', director: 'Mansoor Khan', year: 1988, rating: 7.6 },
  { title: 'Parinda', director: 'Vidhu Vinod Chopra', year: 1989, rating: 8.1 },
  { title: 'Dil', director: 'Indra Kumar', year: 1990, rating: 7.8 }
];

// Your code here
const getBestOldBollywoodMovies = (movies) => (movies.filter(movie=>movie.year<1990 && movie.rating>8.0)).map(movie=>movie.title)
const bestOldMovies = getBestOldBollywoodMovies(bollywoodMovies);
console.log(bestOldMovies); // Output: ['Sholay', 'Parinda']

console.log("Question set 4");
console.log("Program 1")

// Given an array, write an ES6 function that returns the total length of all the strings in an array.

const strings = ["apple", "banana", "cherry", "date", "blueberry"];
// Your code here

const totalLength = (strings) => strings.reduce((length,str)=> length+str.length,0);

console.log(totalLength(strings));
// Output: 30

// Write an ES6 function sumSquares that takes an array of numbers and returns the sum of the squares of all the numbers in the array
console.log("Program 2")
const numbers = [1, 2, 3, 4, 5];
// Your code here

const sumSquares = (numbers) => numbers.reduce((sum,num)=> sum+num*num,0);

console.log(sumSquares(numbers));
 // Output: 55 

 console.log("Program 3")
//  Write an ES6 function that calculates and returns the total value of all items in an array of objects.

 const items = [
   { name: "Item 1", price: 10 },
   { name: "Item 2", price: 20 },
   { name: "Item 3", price: 30 }
 ];
 // Your code here
 
const totalValue = (items)=> items.reduce((total,item)=> total+item.price,0);

 console.log(totalValue(items)); 
 // Output: 60
 
//  Write an ES6 function that takes an array of objects with name and age property, and returns the name of the oldest person.
console.log("Program 7")
 const people2 = [
             {name: 'Jeena', age: 25}, 
             {name: 'Priya', age: 30}, 
             {name: 'Naina', age: 45}
 ]
 // Your code here
 
 const oldestPersonName = (people) => people.reduce((person,people)=> people.age>person.age? people:person,people[0]).name;

 console.log(oldestPersonName(people2)); 
 // Output: 'Naina'
 
//  Write an ES6 function that takes an array of objects representing products with properties name, price, and quantity, and returns an object with the most expensive product.

console.log('Program 9')

const findMostExpensiveProduct = (products)=> products.reduce((expensiveProd,product)=> expensiveProd.price < product.price? product: expensiveProd, products[0])

 const products = [
   { name: "Bread", price: 10, quantity: 2 },
   { name: "Clips", price: 20, quantity: 5 },
   { name: "Knife", price: 30, quantity: 1 },
   { name: "Slipper", price: 40, quantity: 3 }
 ];
 // Your code here
 
 console.log(findMostExpensiveProduct(products)); 
 // { name: "Slipper", price: 40, quantity: 3 }
 

console.log("Program 10")

// Write an ES6 function that takes an array of strings and returns an object with the count of each string.

const fruits = ['apple', 'banana', 'banana', 'cherry', 'apple', 'apple', 'banana'];
// Your code here

const countStrings = (arr) => {
    return arr.reduce((count, str) => {
        count[str] = (count[str] || 0) + 1; // Increment the count for the string
        return count; // Return the updated count object
    }, {}); // Initialize the accumulator as an empty object
};


console.log(countStrings(fruits));
// Output: { 'apple': 3, 'banana': 3, 'cherry': 1 }


//1) Declare a JavaScript array and initialize it with some names (Lars, Jan, Peter, Bo, Frederik etc.). Use the filter method to create a new array with only names of length <=3.
// Use the forEach method to iterate and print (console.log) both the original and the new array.
const names = ["lars", "jan", "peter", "bo", "frederik"]
names.forEach(name => console.log(name));

const namesFiltered = names.filter(function(name){
    return name.length <=3;
})
namesFiltered.forEach(name=> console.log(name))

//2)Use the names-array created above, and, using its map method,
//create a new array with all names in uppercase
const namesUpperCased = names.map(function(name) {
    return name.toUpperCase()})
namesUpperCased.forEach(name => console.log(name))

//3) Use map, join + just a little bit more to create a function, which given the array of names, for example: ["Lars", "Peter", "Jan", "Ian"] returns a string with the HTML for the names in an <ul> as sketched below:
{/* <ul>
  <li>Lars</li>
  <li>Peter</li>
  <li>Jan</li>
  <li>Ian</li>
<ul>
The output above was shown with newlines for readability, but this is actually what we want (why):

<ul><li>Lars</li><li>Peter</li><li>Jan</li><li>Ian</li><ul> */}
//function takes list of names
//forEach on list, add <li> for each
//join each to new list
//functions outputs <ul> + (list) + </ul>
const lis = "<ul>" + names.map( n => `<li>${(n)}</li>`).join("") + "</ul>"
console.log(lis)

//4)  Given this JavaScript array
// const cars = [
//   { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
//   { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
//   { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
//   { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
//   { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
// ];
// a) Use the filter filter function to get arrays with only:
// Cars newer than 1999
// Al  Volvo’s
// All cars with a price below 5000
const cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799},
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
]

//Filter cars by year
console.log("Cars by year after 2000:")
var carsFilterYear = cars.filter(function(car) {return car.year > 2000})//gets specific attribute
carsFilterYear.forEach(car => console.log(car))

//Filter cars by model
console.log("Cars by model Volvo only:")
var carsFilterVolvo = cars.filter(function(car) {return car.make = 'Volvo'})
carsFilterVolvo.forEach(car => console.log(car))

//Filter cars by price
console.log("Cars by price under 5000:")
var carsfilterPrice = cars.filter(function(car) {return car.price < 5000})
carsfilterPrice.forEach(car => console.log(car))

// 4a) (Extra, ONLY if you have time) Use map, join + just a little bit more to implement a function, that , given the cars array used above, will create, and return a string with valid SQL statements to insert the data into a table with matching column names (id, year, make, model, price) as sketched below:
//
// INSERT INTO cars (id,year,make,model,price) VALUES ( 1, 1997 'Ford','E350', 3000 );
// ...
function carsToSQL() {
    let iterator = 1
    const carsSQL = cars.map(function(car){return "INSERT INTO cars (id, year, make, model, price) VALUES (" + iterator++ +", " + car.year+ ", '" + car.make+ "', '" + car.model + "', " +car.price + ")"})
    carsSQL.forEach(car=> console.log(car))
}
carsToSQL(cars) //Just for fun this function uses an iterator to generate an id. Use 'car.id' instead if id already given




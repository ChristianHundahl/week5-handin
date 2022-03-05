//Implement a function: myFilter(array, callback)that takes an array as the first argument, and a callback
//as the second and returns a new (filtered) array according to the code provided in the callback
const cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799},
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
]
function myFilter(array, predicate) {
    const result = []
    for (const index in array) {
        const item = array[index]
        const should_include = predicate(item)
        if (should_include) { result.push(item) }
    }
    return result
}
console.log("My filter:")
console.log(myFilter(cars, car=>car.price>5000))

//b) Implement a function: myMap(array, callback)that, provided an array and a callback, provides the same functionality as calling the existing map method on an array.
// Test the method with the same array and callback as in the example with the original map method.
function myMap(array, callback) {
    let mappedArray = []
    for (let index in array) {
        mappedArray.push(callback(array[index]))
    }
    return mappedArray
}
console.log("My map:")
console.log(myMap(cars, car=>car.price));
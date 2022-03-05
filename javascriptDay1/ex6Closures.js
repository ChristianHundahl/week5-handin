//1) Implement and test the Closure Counter Example from the Slides
var makeCounter = function() {
    var privateCounter = 0;
    function changeBy(val){
        privateCounter += val;
    }
    return {
        increment: function() {changeBy(1)},
        decrement: function() {changeBy(-1)},
        value: function() {return privateCounter}
    }
};

var counter1 = makeCounter()
counter1.decrement()
console.log(counter1.value())
counter1.increment()
counter1.increment()
console.log(counter1.value()) //works good

var counter2 = makeCounter();
counter2.increment()
counter2.increment()
console.log(counter2.value())//Works good

//2) Implement a reusable function using the Module pattern that should encapsulate information about a person (name, and age) and return an object with the following methods:
//setAge
//setName
//getInfo (should return a string like Peter, 45)
function personDetails(){
    const person = {
        myAge: 0,
        myName: "",
    }
    function setAge(age) {
        this.myAge = age
    }
    function setName(name) {
        this.myName = name
    }
    return {
        changeAge : function(age) {
            setAge(age)
        },
        changeName : function(name) {
            setName(name)
        },
        getInfo : function() {
            return myName + ", " + myAge
        }
    }

}
person1 = personDetails()
person1.changeAge(12)
person1.changeName("Mark")
console.log(person1.getInfo())

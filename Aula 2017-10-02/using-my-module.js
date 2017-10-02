console.log("before 1st require")
let mm = require('./my-module')("SLB");
console.log("after 1st require")

console.log(mm)

console.log(mm.sayHello("Benfica"));


console.log("before 2nd require")
let mm1 = require('./my-module')("SLB");
console.log("after 2nd require")

console.log(mm === mm1);  // should be false

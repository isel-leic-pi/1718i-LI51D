
// let initLog = function () {
//     var oldConsoleLog = console.log;
//     console.log = function() {
//         return oldConsoleLog.apply(this, [new Date().toLocaleDateString() + "-" + new Date().toLocaleTimeString()].concat(Array.prototype.slice.call(arguments, 0)));
//     }
// }

// initLog();

(function () {
    var oldConsoleLog = console.log;
    console.log = function() {
        return oldConsoleLog.apply(this, 
            [new Date()]
            .concat(Array.prototype.slice.call(arguments, 0)));
    }
})();

var a = [1,2,3,4,5];

var a1 = new Array(3);
console.log(a1.length === 3);
console.log(a1[0] === undefined);
console.log(a1[1] === undefined);
console.log(a1[2] === undefined);


var a1 = new Array("3");
console.log(a1.length === 1);
console.log(a1[0] === "3");



var theArray = ["Sport", "Lisboa", "e", "Benfica"];

var lenArray = theArray.map((e) =>  e.length ).filter((e) => e > 1);
console.log(lenArray);


lenArray.forEach(console.log);






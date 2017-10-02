console.log("my-module begin")

var y = 10;

function bar() {

}


module.exports = function (str) {
    return {
        foo: str,
        sayHello: function (str) {
            return "Hello " + str;
        }
    }
}
// module.exports.foo = "SLB";
// module.exports.sayHello = function(str) {
//     return "Hello " + str;
// };

console.log("my-module end")
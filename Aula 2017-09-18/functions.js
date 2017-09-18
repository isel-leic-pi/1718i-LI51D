function f1() {

}

function add(x, y) {
    return x + y;
}

function varArguments(a) {
    console.log("Showing actual arguments passed: ")
    console.log(typeof arguments);
    for(var i = 0; i < arguments.length; ++i) {
        console.log("argument[" + i + "]=" + arguments[i]);
    }
}

console.log(f1());

console.log(add(5, 10));
console.log(add('S', 10));

varArguments();
varArguments(1, "!", "abc", { }, 23);





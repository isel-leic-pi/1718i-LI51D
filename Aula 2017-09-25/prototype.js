
function showProperties(o) {
    for(let k in o) {
        console.log("o[" + k + "]=" + o[k]);
    }
}


// MyArray sem usar prototype

console.log("----- Without prototype -----")
function MyArray() {
    this.arr = [];

    for(let i = 0; i < arguments.length; ++i) {
        this.arr[i] = arguments[i];
    }

    this.push = function(val) {
        this.arr[this.arr.length] = val;
    }

    this.pop = function() {
        //return this.arr[this.arr.length-- - 1];
        let val = this.arr[this.arr.length - 1];
        --this.arr.length;
        return val;
    }

    this.toString = function() {
        return this.arr.toString();
    }
}


var ma1 = new MyArray(1,2,3, "a", "b", "c");

console.log(ma1.toString());
ma1.push(15);
console.log(ma1.toString());
console.log(ma1.pop());

showProperties(ma1);

// ------------------------------

// MyArray usando prototype
console.log("----- With prototype -----")

function MyArrayWp() {
    this.arr = [];

    for(let i = 0; i < arguments.length; ++i) {
        this.arr[i] = arguments[i];
    }
}

MyArrayWp.prototype.push = function(val) {
    this.arr[this.arr.length] = val;
}

MyArrayWp.prototype.pop = function() {
    //return this.arr[this.arr.length-- - 1];
    let val = this.arr[this.arr.length - 1];
    --this.arr.length;
    return val;
}

// MyArrayWp.prototype.toString = function() {
//     return this.arr.toString();
// }


var map = new MyArrayWp(1,2,3, "a", "b", "c");

console.log(map.toString());
map.push(16);
console.log(map.toString());
console.log(map.pop());

showProperties(map);

console.log(map.hasOwnProperty("arr"));
console.log(map.hasOwnProperty("push"));
map.push = map.constructor.prototype.push;
console.log(map.hasOwnProperty("push"));


console.log("Empty object properties:")
showProperties(new Object());

// ------------------------------


var s = "O maior";



String.prototype.enclose = function(prefix, suffix) {
    return prefix + this + suffix;
}

console.log(s.enclose("Glorioso-", "-SLB"));


var proto = { 
    a: 5,
    b: function() {}
}

function MyProto() {

}
MyProto.prototype = proto;

let o1 = new MyProto();

let o2 = Object.create(proto); 

console.log(Object.getPrototypeOf(o1) == proto);
console.log(Object.getPrototypeOf(o2) == proto);






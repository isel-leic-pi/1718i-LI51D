function f(a1) {

    let v1 = a1;

    v1++;

    console.log(v1);


    function inner() {
        v1++;

    }

    inner();
    inner();
    return inner;
}

let inner1 = f(6);

inner1();
inner1();


inner1 = f(6);

f(6);

// ------------

// Captuting context with var variables
function closureCreatorOldWay(n) {
    console.log("closureCreatorOldWay")
    var a = [];
    var i = 0;

    for(; i < n; ++i) {
        a[i] =  (function(cnt) {
            return function() { console.log(cnt); }
        })(i);
    }
    return a;
}


// Captuting context with let variables
function closureCreatorNewWay(n) {
    console.log("closureCreatorNewWay")
    
    var a = [];
    

    for(let i = 0; i < n; ++i) {
        a[i] = function() { console.log(i); }
    }
    return a;
}


var a = closureCreatorOldWay(5);
a.forEach(f => f());

var a = closureCreatorNewWay(5);
a.forEach(f => f());

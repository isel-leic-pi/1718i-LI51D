// Java Script literal objects ==> JavaScript Object Notation (JSON)
let o = {
    a: 5,
    b: "SLB"
};

console.log(o.a);
console.log(o.b);
console.log(o.c);

o.c = 20;  
console.log(o.c);

o.B = 30;

delete o.b;
console.log(o.b);

// Acesso a propriedades
console.log("Dot notation for property a " + o.a) // Dot notation

console.log("Subscript notation for property a " + o['a']) // subscript notation


o['%&/()'] = 30;
console.log(o['%&/()']);


console.log("--------------")
for(let k in o) {
    console.log(k + "=" + o[k])
}

// Criar objetos usando função construtora
let o1 = new Object();
o1.a = 5;
o1.b = "SLB";


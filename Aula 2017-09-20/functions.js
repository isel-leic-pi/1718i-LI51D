"use strict";

function f(a,b) {
    console.log(this);
}

// O this de uma função depende da forma como é chamada:

// 1ª: Como função global - Objecto global ou undefined em modo strict
console.log("Call as global function")
f();

// 2ª forma - como método
console.log("Call as a method")
var o = {m : f};
o.m();

// 3ª forma - usando os método apply ou call
console.log("Call with apply or call methods")
var o1 = { greatest: "SLB"};
f.apply(o1)
o.m.call(o1, "slb",2);

// var b1 = { title: "Book 1", isbn: "12213124"};
// var b2 = { title: "Book 2", isbn: "235234523"};
// var b3 = { title: "Book 3", isbn: "0392403249"};

// 4ª forma - como função construtora
console.log("Call as a constructor function")

var b1 = Book("Book 1","12213124");

var b2 = new Book("Book 2", "235234523");
var b3 = new Book("Book 3","0392403249");


function Book(title, isbn) {
    this.title = title;
    this.isbn = isbn;

    this.toString = function() {
        return this.title + " - " + this.isbn;
    }

    console.log(this);
}
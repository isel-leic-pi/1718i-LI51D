function foo() {
    console.log(this);
}

new global.Object

foo();
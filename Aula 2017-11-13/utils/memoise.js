/**
 * Memoise function for functions with 2 arguments.
 * 
 * This function assumes that the toString for diffretnt arguments must be different.
 * 
 * @param  {} originalFunction
 */
function memoiseV1(originalFunction) {
    console.log("memoiseV1")
    const cache = { }

    return function(x, y) {
        let cachedValue = cache[x.toString() + y.toString()]
        if(cachedValue) {
            return cachedValue;
        }
        let res =  originalFunction(x, y);
        // Save result in cache
        cache[x.toString() + y.toString()] = res;
        return res;
    }
}

module.exports = function(sync) {
    return sync ? memoiseSync : memoiseAsync;  
}

function memoiseSync(originalFunction) {
    console.log("memoiseSync")
    const cache = { }

    return function() {
        //let key = Array.join.call(arguments)
        let key = Array.prototype.reduce.call(arguments,(prev, curr) => prev+curr.toString(), "")

        let cachedValue = cache[key]
        if(cachedValue) {
            return cachedValue;
        }
        let res =  originalFunction.apply(this, Array.prototype.slice.call(arguments, 0, arguments.length));
        // Save result in cache
        cache[key] = res;
        return res;
    }
}    



function memoiseAsync(originalFunction) {
    console.log("memoiseAsync")
    const cache = { }

    return function() {
        let argumentsExceptCallback = Array.prototype.slice.call(arguments, 0, arguments.length -1);
        let callback = arguments[arguments.length-1];
        let key = argumentsExceptCallback.reduce((prev, curr) => prev+curr.toString(), "")
        let cachedValue = cache[key]
        if(cachedValue) {
            return callback(cachedValue.err, cachedValue.data)
        }
        argumentsExceptCallback.push((err, data) => {  cache[key] = { err: err, data: data}; callback(err, data) })

        let res =  originalFunction.apply(this, argumentsExceptCallback);
        // Save result in cache 
        return res;
    }
}    



let count = 0;

function add3(x, y, z) {
    console.log("add3 called with " + x + " " + y +  " " + z)
    count++;
    return x+y+z;
}

function add3Async(x, y, z, cb) {
    console.log("add3 called with " + x + " " + y +  " " + z)
    count++;
    cb(null, x+y+z)
}

const memoise = require("../utils/memoise")

const memoiseSync = memoise(true)
const memoiseAsync = memoise(false)

module.exports.sync = {
    setUp: function (callback) {
        console.log("Before each test")
        count = 0;
        callback();
    },
    tearDown: function (callback) {
        console.log("After each test")
        callback();
    },


    shouldCallOriginalFunctionOnFirstCall: function(test) {
        var addWithMemoisation3 = memoiseSync(add3);
        let res = addWithMemoisation3(2,3,3)

        test.equal(res, 8)
        test.equal(count, 1)

        test.done()
    },

    shouldCallOriginalOnlyOnceForTheSameArguments: function(test) {
        var addWithMemoisation3 = memoiseSync(add3);
        let res1 = addWithMemoisation3(2,3,3)
        let res2 = addWithMemoisation3(2,3,3)
        
        test.equal(res2, res1)
        test.equal(count, 1)

        test.done()
    }
}

module.exports.async = {
    setUp: function (callback) {
        console.log("Before each test async")
        count = 0;
        callback();
    },
    tearDown: function (callback) {
        console.log("After each test async")
        callback();
    },


    shouldCallOriginalFunctionOnFirstCall: function(test) {
        var addWithMemoisation3 = memoiseAsync(add3Async);
        addWithMemoisation3(2,3,3, verifyResults)
        

        function verifyResults(err, res) {
            test.equal(res, 8)
            test.equal(count, 1)
            test.done()
        }
        

        
    },

    shouldCallOriginalOnlyOnceForTheSameArguments: function(test) {
        var addWithMemoisation3 = memoiseAsync(add3Async);
        addWithMemoisation3(2,3,3, verifyResults)
        

        function verifyResults(err, res1) {
            addWithMemoisation3(2,3,3, verifyFinalResults)

            function verifyFinalResults(err, res) {
                test.equal(res1, res)
                test.equal(count, 1)
                test.done()
            }
        }
    }
}
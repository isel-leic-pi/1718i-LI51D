module.exports = {
    setUp: function (callback) {
        console.log("Before each test")
        callback();
    },
    tearDown: function (callback) {
        console.log("After each test")
        callback();
    },


    test1: function(test) {
        console.log("test 1")
        test.ok(true, "Test passed")
        test.done();
    },

    test2: function(test) {
        console.log("test 2")
        test.ok(false, "Test failed")
        test.done()
    }
}
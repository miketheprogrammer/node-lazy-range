var test = require('tape');

var range = require('./range')

test('Everything should execute without error', function(t) {
/*
  Faster than Array.map since it does
  array composition and function application in same step
*/
var arr = range(1,11).map(function(i) {
    return i*5
})
console.log(arr)

/*
You can still do
*/
arr = range(1,11).toArray().map(function(i) {
    return i*2
})
console.log(arr)


/*
As well we can just execute a function against a range but not return an array
*/
range(1,11).forEach(function(i) {
    console.log(Math.exp(i,2))
})

/*
As well we can execute Async
*/
range(1,11).forEachAsync(function(i) {
    console.log('num:' + Math.exp(i,2));
})

t.same([1,2,3,4], range(1,5).toArray());
t.same([0,2,4,6,8], range(0,10,2).toArray());
t.same([0.5,2.5,4.5,6.5,8.5], range(0,10,2).map(function(v,i) {return v+.5}));

t.end();

});
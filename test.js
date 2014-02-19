var test = require('tape');

var range = require('./range')

test('Everything should execute without error', function(t) {
/*
As well we can just execute a function against a range but not return an array
*/
range(1,11).forEach(function(i) {
    console.log(Math.exp(i,2))
})

t.same([1,2,3,4], range(1,5).toArray());
t.same([0,2,4,6,8], range(0,10,2).toArray());
t.same([0.5,2.5,4.5,6.5,8.5], range(0,10,2).map(function(v,i) {return v+.5}));

t.end();

});
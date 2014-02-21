node-lazy-range
===============

[![browser support](https://ci.testling.com/miketheprogrammer/node-lazy-range.png)](https://ci.testling.com/miketheprogrammer/node-lazy-range)

[![build status](https://secure.travis-ci.org/miketheprogrammer/node-lazy-range.png)](http://travis-ci.org/miketheprogrammer/node-lazy-range)


Lazy Range function for JS. Exposes forEach forEachAsync and toArray

``` js
npm install lazy-range
```

Example.js
``` js
var range = require('./range')

/*
  Faster than Array.map since it does
  array composition and function application in same step
*/
var arr = range(1,11).map(function(i) {
    return i*5
})

// You can also use a step param

range(0,10,2).toArray(); // where step == 2
//[0, 2, 4, 6, 8]


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
console.log('This should come first')
```

Results: (example.js)
``` js
[ 5, 10, 15, 20, 25, 30, 35, 40, 45, 50 ]
[ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ]
2.718281828459045
7.38905609893065
20.085536923187668
54.598150033144236
148.4131591025766
403.4287934927351
1096.6331584284585
2980.9579870417283
8103.083927575384
22026.465794806718
This should come first
num:2.718281828459045
num:7.38905609893065
num:20.085536923187668
num:54.598150033144236
num:148.4131591025766
num:403.4287934927351
num:1096.6331584284585
num:2980.9579870417283
num:8103.083927575384
num:22026.465794806718

```

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/miketheprogrammer/node-lazy-range/trend.png)](https://bitdeli.com/free "Bitdeli Badge")


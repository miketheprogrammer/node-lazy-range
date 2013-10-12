module.exports = function range(a, b) {
    return { 
	map: function map(func) {
	    var arr = []
	    for (var i=a; i<b; i++) {
		arr.push(func(i))
	    }
	    return arr;
	},
	toArray: function toArray() {
	    // Store object for simple memoization
	    if ( this.arr !== undefined )
		if ( this.arr instanceof Array )
		    return this.arr

	    var arr = [];
	    for (var i=a; i<b; i++) {
		arr.push(i);
	    }
	    this.arr = arr;
	    return arr;
	},
	forEach: function forEach(func) {
	    for(var i=a; i<b; i++){
		func(i);
	    }
	    return undefined;
	},
	forEachAsync: function forEachAsync(func) {
	    for (var i=a; i<b; i++) {
		setImmediate(func.bind(null, i))
	    }
	}
    }
}

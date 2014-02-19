module.exports = function range(a, b, skip) {
	skip = (skip || 1)
  return { 
		map: function map(func) {
		    var arr = []
		    var index = 0;
		    for (var i = a; i < b; i += skip) {
					arr.push(func(i, index, arr));
					index += 1;
		    }
		    return arr;
		},
		toArray: function toArray() {
		    // Store object for simple memoization
		    if ( this.arr !== undefined )
			if ( this.arr instanceof Array )
			    return this.arr

		    var arr = [];
		    for (var i = a; i < b; i += skip) {
					arr.push(i);
		    }
		    this.arr = arr;
		    return arr;
		},
		forEach: function forEach(func) {
			var index = 0;
		  for (var i = a; i < b; i += skip) {
				func(i, index);
				index += 1;
		  }
		  return undefined;
		},
		forEachAsync: function forEachAsync(func) {
			var index = 0;
		  for (var i = a; i < b; i += skip) {
				setImmediate(func.bind(null, i, index));
				index += 1;
		  }
		}
  }
}

function total(arr) {
	console.log("working");
	return arr.reduce((prev, curr) => {
		return prev + curr;
	});
}

console.log(total([1, 2, 3])); // 6

function stringConcat(arr) {
	return arr.reduce((a, b) => a.concat(b));
}

console.log(stringConcat([1, 2, 3])); // "123"

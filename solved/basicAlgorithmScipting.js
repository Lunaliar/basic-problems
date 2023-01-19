//! /////////////////////////////////////////////////////////////

function convertCtoF(celsius) {
	let fahrenheit = (celsius * 9) / 5 + 32;
	return fahrenheit;
}

convertCtoF(30);

//! /////////////////////////////////////////////////////////////

function reverseString(str) {
	return str.split("").reverse().join("");
}

reverseString("hello");

//! /////////////////////////////////////////////////////////////

function factorialize(num) {
	if (num === 0 || num === 1) return 1;
	for (let i = num - 1; i > 0; i--) {
		num = num * i;
	}
	return num;
}

factorialize(5);

//! /////////////////////////////////////////////////////////////

function findLongestWordLength(str) {
	const arr = str.split(" ");
	let word = "";
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].length > word.length) word = arr[i];
	}
	return word.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

//! /////////////////////////////////////////////////////////////

function largestOfFour(arr) {
	const results = [];
	for (let i = 0; i < arr.length; i++) {
		let largestNumber = arr[i][0];
		for (let j = 1; j < arr[i].length; j++) {
			if (arr[i][j] > largestNumber) {
				largestNumber = arr[i][j];
			}
		}
		results[i] = largestNumber;
	}

	return results;
}

console.log(
	largestOfFour([
		[4, 5, 1, 3],
		[13, 27, 18, 26],
		[32, 35, 37, 39],
		[1000, 1001, 857, 1],
	])
);

//! /////////////////////////////////////////////////////////////

function confirmEnding(str, target) {
	return str.slice(str.length - target.length) === target;
}

confirmEnding("Bastian", "n");

//! /////////////////////////////////////////////////////////////////

function repeatStringNumTimes(str, num) {
	if (num === 0) return "";
	else {
		let newStr = "";
		for (let i = num; i > 0; i--) {
			newStr = newStr + str;
		}
		return newStr;
	}
}

repeatStringNumTimes("abc", 3);

//! /////////////////////////////////////////////////////////////
function truncateString(str, num) {
	if (str.length <= num) return str;
	str = str.substring(0, num) + "...";
	return str;
}

console.log(
	truncateString(
		"A-tisket a-tasket A green and yellow basket",
		"A-tisket a-tasket A green and yellow basket".length + 2
	)
);

//! /////////////////////////////////////////////////////////////

function findElement(arr, func) {
	for (let i = 0; i < arr.length; i++) {
		if (func(arr[i])) return arr[i];
	}
	return undefined;
}

findElement([1, 3, 5, 8, 9, 10], (num) => num % 2 === 0);

//! /////////////////////////////////////////////////////////////

function booWho(bool) {
	return typeof bool === "boolean" ? true : false;
}

booWho(null);

//! /////////////////////////////////////////////////////////////

function titleCase(str) {
	const arr = str.split(" ");
	for (let i = 0; i < arr.length; i++) {
		let word = "";
		for (let j = 0; j < arr[i].length; j++) {
			if (j === 0) {
				word = word + arr[i][j].toUpperCase();
			} else {
				word = word + arr[i][j].toLowerCase();
			}
		}
		arr[i] = word;
	}
	return arr.join(" ");
}

titleCase("I'm a little tea pot");

//! /////////////////////////////////////////////////////////////

function frankenSplice(arr1, arr2, n) {
	const arr = [...arr2].splice(0, n);
	const end = arr2.slice(n - arr2.length);
	for (let i = 0; i < arr1.length; i++) {
		arr.push(arr1[i]);
	}
	for (let i = 0; i < end.length; i++) {
		arr.push(end[i]);
	}
	return arr;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
console.log(
	frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)
);

//? ALTERNATIVE MAP ///////////////////////////////////////////////////

function frankenMapSplice(arr1, arr2, n) {
	const arr = [...arr2].splice(0, n);
	const end = arr2.slice(n - arr2.length);
	arr1.map((i) => arr.push(i));
	end.map((e) => arr.push(e));
	return arr;
}

console.log(frankenMapSplice([1, 2, 3], [4, 5, 6], 1));
console.log(
	frankenMapSplice(
		["claw", "tentacle"],
		["head", "shoulders", "knees", "toes"],
		2
	)
);

//! /////////////////////////////////////////////////////////////

function bouncer(arr) {
	let trueArr = [];
	arr.map((i) => i && trueArr.push(i));
	return trueArr;
}

bouncer([7, "ate", "", false, 9]);

//! /////////////////////////////////////////////////////////////

function getIndexToIns(arr, num) {
	const sortedArr = arr.sort((a, b) => a - b);
	let min = sortedArr[0];
	for (let i = 0; i < sortedArr.length; i++) {
		if (num >= sortedArr[i]) {
			if (num === sortedArr[i]) return arr.indexOf(num);
			else min = sortedArr[i];
		}
	}
	return arr.indexOf(min) + 1;
}

getIndexToIns([10, 20, 30, 40, 50], 30);
//getIndexToIns([40, 60, 32, 80], 50);

//! /////////////////////////////////////////////////////////////

function mutation(arr) {
	const target = arr[0].toLowerCase().split("");
	const test = arr[1].toLowerCase().split("");
	for (let i = 0; i < test.length; i++) {
		if (target.indexOf(test[i]) < 0) return false;
	}
	return true;
}

mutation(["hello", "hey"]);

//! /////////////////////////////////////////////////////////////

function chunkArrayInGroups(arr, size) {
	const splitArr = [];
	for (let i = 0; i < arr.length; i += size) {
		splitArr.push(arr.slice(i, i + size));
	}
	return splitArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

//! /////////////////////////////////////////////////////////////

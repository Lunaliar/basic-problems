//Todo BINARY AGENT
function binaryAgent(str) {
	return String.fromCharCode(
		//Im a little confused about why this works? a
		// function inside another function like this?
		// also like its an array inside a string function?
		...str.split(" ").map((char) => {
			return parseInt(char, 2);
		})
	);
}
console.log(String.fromCharCode("d1"));

console.log(
	binaryAgent(
		"01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
	)
);

binaryAgent(
	"01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
);

//! //////////////////////////////////////////////////////////////////////////////////////////////

//TODO WHERE FOR ART THOU
// Not my solution but similar approach
// confused about the syntax and why it works

function whatIsInAName(collection, source) {
	// "What's in a name? that which we call a rose
	// By any other name would smell as sweet.”
	// -- by William Shakespeare, Romeo and Juliet
	const souceKeys = Object.keys(source);

	// filter the collection
	return collection.filter((obj) =>
		souceKeys
			.map((key) => obj.hasOwnProperty(key) && obj[key] === source[key])
			.reduce((a, b) => a && b)
	);
}

// test here
whatIsInAName(
	[
		{ first: "Romeo", last: "Montague" },
		{ first: "Mercutio", last: null },
		{ first: "Tybalt", last: "Capulet" },
	],
	{ last: "Capulet" }
);

//TODO HTML STRINGER
// my answer is the second and Im so
// confused as to why it doesnt work
// specifically with line 96

function convertHTML(str) {
	// Use Object Lookup to declare as many HTML entities as needed.
	const htmlEntities = {
		"&": "&amp;",
		"<": "&lt;",
		">": "&gt;",
		'"': "&quot;",
		"'": "&apos;",
	};
	//Use map function to return a filtered str with all entities changed automatically.
	return str
		.split("")
		.map((entity) => htmlEntities[entity] || entity)
		.join("");
}

// test here
convertHTML("Dolce & Gabbana");

//? ////////////////////////////////////
//?  MY INCORRECT ANSWER ?????

function myconvertHTML(str) {
	const codes = {
		"&": "&amp;",
		"<": "&lt;",
		">": "&gt;",
		'"': "&quot;",
		"'": "&apos;",
	};
	const arr = str.split("");
	return arr.reduce((a, b) => {
		return codes[b] ? a.concat(codes[b]) : a.concat(b);
	});
}

console.log(myconvertHTML("<>")); // OUTPUT = "<&gt;" not "&lt:&gt;"
function addTogether() {
  const args = [...arguments];
  if(args.every(val=> Number.isInteger(val))){
    return args.length === 1 ?
     (x) => addTogether(args[0],x) :
     args.reduce((a,b)=> a+b)
  }
}

console.log(addTogether(2,0))
console.log(addTogether(23,30))
console.log(addTogether(5)(7))
 
 //! ///////////////////////////////////////////////////////////////////////////////////////////////////
//? //////////////////////////////////////////////////
//! /////////////////////////////////////////////////
//? ////////////////////////////////////////////////


function whatIsInAName(collection, source) {
  // "What's in a name? that which we call a rose
  // By any other name would smell as sweet.”
  // -- by William Shakespeare, Romeo and Juliet
  const souceKeys = Object.keys(source);

  // filter the collection
  return collection.filter(obj => souceKeys
      .map(key => obj.hasOwnProperty(key) && obj[key] === source[key])
      .reduce((a, b) => a && b));
}

// test here
whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }
  ],
  { last: "Capulet" }
);
 
 //! ///////////////////////////////////////////////////////////////////////////////////////////////////
//? Not my original solution, got stumped by the math of it all
//? I was trying to set up a for loop to make a prime number array
//? and then sum all with reduce

function sumPrimes(num) {
  // Check all numbers for primality
  let primes = [];
  for (let i = 2; i <= num; i++) {
    if (primes.every((prime) => i % prime !== 0))
      primes.push(i);
  }
  return primes.reduce((sum, prime) => sum + prime, 0);
}
 
 //! ///////////////////////////////////////////////////////////////////////////////////////////////////
function sumFibs(num) {
  const fibArr=[];
  for(let i =0; i <= num;i++){
    if (i === 0) fibArr[i] = 0;
    else if (i === 1) fibArr[i] = 1;
    else fibArr[i] = fibArr[i-1] + fibArr[i-2]
  }
  const oddsArr = fibArr.filter(i=> i %2 !== 0 && i <= num)
  return oddsArr.reduce((a,b)=> {
    return a+b
  })
}

console.log(sumFibs(1000))
 
 //! ///////////////////////////////////////////////////////////////////////////////////////////////////
function sumAll(arr) {
  let end = 0
  let result = 0
  arr[0] > arr[1] ?  end = arr[0] : end = arr[1]
  arr[0] < arr[1] ? result = arr[0] : result = arr[1]
  for(let i= result + 1; i <= end; i++){
    result = result + i
  }
  return result;
}

sumAll([1, 4]);
 
 //! ///////////////////////////////////////////////////////////////////////////////////////////////////
function steamrollArray(val,flatArr=[]) {
  val.forEach(item => {
    if (Array.isArray(item)) steamrollArray(item, flatArr);
    else flatArr.push(item);
  });
  return flatArr;
}


//? My incorrect answer

// function steamrollArray(arr) {
//   return arr.reduce((a,b)=>{
//     console.log(a)
//     if (Array.isArray(b)) return steamrollArray(b)
//     else return a.concat(b)
//   },[])
// }

// console.log(steamrollArray([1, [2], [3, [[4]]]]))
 
 //! ///////////////////////////////////////////////////////////////////////////////////////////////////
function spinalCase(str) {
  return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase()
}

spinalCase('This Is Spinal Tap');
 
 //! ///////////////////////////////////////////////////////////////////////////////////////////////////
//? //////////////////////////////////////////////
//! /////////////////////////////////////////////
//? ////////////////////////////////////////////
function uniteUnique(arr) {
  const args = [...arguments];
  const result = [];
  for (let i = 0; i < args.length; i++) {
    for (let j = 0; j < args[i].length; j++) {
      if (!result.includes(args[i][j])) {
        result.push(args[i][j]);
      }
    }
  }
  return result;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
 
 //! ///////////////////////////////////////////////////////////////////////////////////////////////////
//? ///////////////////////////////////////
//! //////////////////////////////////////
//? /////////////////////////////////////
// Not my solution but was the most similar approach to mine

function smallestCommons(arr) {
  // Setup
  const [min, max] = arr.sort((a, b) => a - b);
  const range = Array(max - min + 1)
    .fill(0)
    .map((_, i) => i + min);
  // GCD of two numbers
  // https://en.wikipedia.org/wiki/Greatest_common_divisor#Euclid's_algorithm
  const gcd = (a, b) => (b === 0) ? a : gcd(b, a % b);
  // LCM of two numbers
  // https://en.wikipedia.org/wiki/Least_common_multiple#Using_the_greatest_common_divisor
  const lcm = (a, b) => a * b / gcd(a, b);
  // LCM of multiple numbers
  // https://en.wikipedia.org/wiki/Least_common_multiple#Other
  return range.reduce((multiple, curr) => lcm(multiple, curr));
}

smallestCommons([1, 5]);
 
 //! ///////////////////////////////////////////////////////////////////////////////////////////////////
function destroyer(arr) {
  const args = [...arguments]
  const newArr = arr.filter(i=> args.indexOf(i) < 0)
  return newArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
 
 //! ///////////////////////////////////////////////////////////////////////////////////////////////////
function myReplace(str, before, after) {
  // Check if first character of argument "before" is a capital or lowercase letter and change the first character of argument "after" to match the case
  if (/^[A-Z]/.test(before)) {
    after = after[0].toUpperCase() + after.substring(1)
  } else {
    after = after[0].toLowerCase() + after.substring(1)
  }

  // return string with argument "before" replaced by argument "after" (with correct case)
  return str.replace(before, after);
}

// test here
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
 
 //! ///////////////////////////////////////////////////////////////////////////////////////////////////
//? //////////////////////////////////////////
//! /////////////////////////////////////////
//? ////////////////////////////////////////
function translatePigLatin(str) {
  return str
    .replace(/^[aeiou]\w*/, "$&way")
    .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
}

// test here
translatePigLatin("consonant");
 
 //! ///////////////////////////////////////////////////////////////////////////////////////////////////
//? //////////////////////////////////////////////////////////
//! /////////////////////////////////////////////////////////
//? ////////////////////////////////////////////////////////
function fearNotLetter(str) {
  for (let i = 1; i < str.length; ++i) {
    if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
      return String.fromCharCode(str.charCodeAt(i - 1) + 1);
    }
  }
}

 
 //! ///////////////////////////////////////////////////////////////////////////////////////////////////
function orbitalPeriod(arr) {
  const args = [...arr]

  const GM = 398600.4418;
  const ER = 6367.4447;

  return args.map(arg=>{
    const axis = arg.avgAlt + ER;
    const orbPer = Math.round((2*Math.PI)*(Math.sqrt(Math.pow(axis,3)/GM)));
    return {name: arg.name, orbitalPeriod: orbPer}
  })
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])
 
 //! ///////////////////////////////////////////////////////////////////////////////////////////////////
const Person = function(firstAndLast) {
  let fullName = firstAndLast;

  this.getFirstName = function() {
    return fullName.split(" ")[0];
  };

  this.getLastName = function() {
    return fullName.split(" ")[1];
  };

  this.getFullName = function() {
    return fullName;
  };

  this.setFirstName = function(name) {
    fullName = name + " " + fullName.split(" ")[1];
  };

  this.setLastName = function(name) {
    fullName = fullName.split(" ")[0] + " " + name;
  };

  this.setFullName = function(name) {
    fullName = name;
  };
};

const bob = new Person("Bob Ross");
console.log(bob.getFullName());
 
 //! ///////////////////////////////////////////////////////////////////////////////////////////////////
function truthCheck(collection, pre) {
  return collection.every(x=> x[pre]) ? true : false 
}

truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");
 
 //! ///////////////////////////////////////////////////////////////////////////////////////////////////
function dropElements(arr, func) {
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}

// test here
console.log(dropElements([1, 2, 3], function(n) {
  return n < 3;
}))
 
 //! ///////////////////////////////////////////////////////////////////////////////////////////////////
function pairElement(str) {
  const pairs={A:'T', T:'A', G:'C', C:'G'}
	return str.split("").map(x=> [x,pairs[x]])
}

pairElement("GCG");

 
 //! ///////////////////////////////////////////////////////////////////////////////////////////////////
function diffArray(arr1, arr2) {
  let newArr = [];
  arr2.map(i => {
    if(arr1.indexOf(i) < 0) newArr.push(i)
  })
  arr1.map(i => {
    if(arr2.indexOf(i) < 0 && newArr.indexOf(i) < 0) newArr.push(i)
  })
  return newArr
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
 
 //! ///////////////////////////////////////////////////////////////////////////////////////////////////
//? /////////////////////////////////////////
//! ////////////////////////////////////////
//? ///////////////////////////////////////
function convertHTML(str) {
  // Use Object Lookup to declare as many HTML entities as needed.
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };
  //Use map function to return a filtered str with all entities changed automatically.
  return str
    .split("")
    .map(entity => htmlEntities[entity] || entity)
    .join("");
}

// test here
convertHTML("Dolce & Gabbana");


//? ////////////////////////////////////
//?  MY INCORRECT ANSWER ?????
function myconvertHTML(str) {
  const codes = {
  '&': "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&apos;"
}
  const arr = str.split("");
  return arr.reduce((a,b)=>{
    return codes[b] ? a.concat(codes[b]) : a.concat(b)
  })
};


console.log(myconvertHTML("<>")) // OUTPUT = "<&gt;" not "&lt:&gt;"
 
 //! ///////////////////////////////////////////////////////////////////////////////////////////////////
function binaryAgent(str) {
  return String.fromCharCode( //Im a little confused about why this works? a 
                              // function inside another function like this?
                              // also like its an array inside a string function?
    ...str.split(" ").map(char => {
      return parseInt(char, 2);
    })
  );
}
console.log(String.fromCharCode('d1')) //Not my solution still doesnt make sense
// test here
console.log(binaryAgent(
  "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
))

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111")
 
 //! ///////////////////////////////////////////////////////////////////////////////////////////////////

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
//Not my solution but similar approach
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


function whatIsInAName(collection, criteria) {
  // we have a collection of data (imagine all of the laptops that Amazon sells)
  // we want a subset of it that matches ALL of our criteria (e.g. 256GB SSD)
  // so we will filter our data and only keep the items that match every piece of criteria
  const criteriaKeys = Object.keys(criteria);

  return collection.filter(obj => {
    return criteriaKeys.every(criteriaKey => {
      return criteriaKey in obj && obj[criteriaKey] === criteria[criteriaKey]
    })
  })
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
//confused as to why it doesnt work
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
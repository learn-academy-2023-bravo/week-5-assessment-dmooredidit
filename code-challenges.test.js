// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.
// psuedocode:
// create function named codedMessage that takes in a "string" and outputs a "string" function must look at each letter individually so i may create an emplty array and push the given variables into it. iterate over the array lookinng at each value in each index filteringor let statement convert vowels a, e, i, o to
// input:"string"
// output:"string"
// a) Create a test with expect statements using the variables provided.

describe("codedMessage", () => {
  it("takes in a string and returns a string with a coded message.", () => {
    const secretCodeWord1 = "Lackadaisical";
    // Expected output: "L4ck4d41s1c4l"
    const secretCodeWord2 = "Gobbledygook";
    // Expected output: "G0bbl3dyg00k"
    const secretCodeWord3 = "Eccentric";
    // Expected output: "3cc3ntr1c"

    expect(codedMessage(secretCodeWord1)).toEqual(["L4ck4d41s1c4l"]);
    expect(codedMessage(secretCodeWord2)).toEqual(["G0bbl3dyg00k"]);
    expect(codedMessage(secretCodeWord3)).toEqual(["3cc3ntr1c"]);
  });
});

// ---> FAIL  ./code-challenges.test.js
//   codedMessage
//   ✕ takes in a string and returns a string with a coded message. (1 ms)
// ---> ReferenceError: codedMessage is not defined

// b) Create the function that makes the test pass.

// Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.
// if(lowerCaseString.length.incluedes("a", "e", "i", "o")){

const secretCodeWord1 = "Lackadaisical";
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook";
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric";
// Expected output: "3cc3ntr1c"

const codedMessage = (string) => {
  for (let i = 0; i < string.length; i++) {
    const lowerCaseString = string.toLowerCase();
    {
      if (lowerCaseString.includes("a", "e", "i", "o")) set: a = "4";
      set: e = "3";
      set: i = "1";
      set: o = "0";
    }
  }
  return lowerCaseString;
};

console.log(codedMessage(secretCodeWord1));
console.log(codedMessage(secretCodeWord2));
console.log(codedMessage(secretCodeWord3));

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// psuedocode:
// create function named filterLetter that takes in a array and outputs an array function must look at each letter individually so i may create an emplty array and push the given variables into it. iterate over the array lookinng at each value in each index filtering or searching for the specific letter
// input: array and "string"
// output:"string"
// a) Create a test with expects statement using the variable provided.

describe("filterLetter", () => {
  it("takes in an array of words and a single letter and returns an array of all the words containing that particular letter.", () => {
    const fruitArray = [
      "Mango",
      "Cherry",
      "Apricot",
      "Blueberry",
      "Peach",
      "Kiwi",
    ];

    const letterA = "a";
    // Expected output: ["Mango", "Apricot", "Peach"]
    const letterE = "e";
    // Expected output: ["Cherry", "Blueberry","Peach"]

    expect(filterLetter(fruitArray(lettterA))).toEqual([
      "Mango",
      "Apricot",
      "Peach",
    ]);
    expect(filterLetter(fruitArray(letterE))).toEqual([
      "Cherry",
      "Blueberry",
      "Peach",
    ]);
  });
});

const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"];

const letterA = "a";
// Expected output: ["Mango", "Apricot", "Peach"]
const letterE = "e";
// Expected output: ["Cherry", "Blueberry","Peach"]

// b) Create the function that makes the test pass.

// Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

const filterLetter = (array, letter) => {
const searchedWords = array.map(array.includes(letter));
    for (let i = 0; i < array.length; i++) {
        if (array.includes("a", "e")) {
        searchedWords.push(array(letter))
        }
    }
return searchedWords
}

console.log(filterLetter(fruitArray(letterA)))
console.log(filterLetter(fruitArray(letterE)))

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// psuedocode:
// create function named bigWin that takes in a array and outputs an "string" function must look at each number to see if the given numbers how many duplicate numbers there are. must be a counter to track numbers thinking i may he to do if statements
// input: array and "string"
// output:"string"
// a) Create a test with expect statements using the variable provided.

describe("bigWin", () => {
  it("takes in an array of 5 numbers and determines whether or not the array is a full house.", () => {
    const hand1 = [5, 5, 5, 3, 3];
    // Expected output: true
    const hand2 = [5, 5, 3, 3, 4];
    // Expected output: false
    const hand3 = [5, 5, 5, 5, 4];
    // Expected output: false
    const hand4 = [7, 2, 7, 2, 7];
    // Expected output: true

    expect(bigWin(hand1)).toEqual(["true"]);
    expect(bigWin(hand2)).toEqual(["false"]);
    expect(bigWin(hand3)).toEqual(["false"]);
    expect(bigWin(hand4)).toEqual(["true"]);
  });
});

// ---> FAIL  ./code-challenges.test.js
// bigWin
// ✕ takes in an array of 5 numbers and determines whether or not the array is a full house. (1 ms)
// ---> ReferenceError: bigWin is not defined

const hand1 = [5, 5, 5, 3, 3];
// Expected output: true
const hand2 = [5, 5, 3, 3, 4];
// Expected output: false
const hand3 = [5, 5, 5, 5, 4];
// Expected output: false
const hand4 = [7, 2, 7, 2, 7];
// Expected output: true

// b) Create the function that makes the test pass.

// Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind. 

// const arr1 = [0, 1, 2, [3, 4]]; (found on mdn)
// console.log(arr1.flat()) ---> Expected output: Array [0, 1, 2, 3, 4]

// const pets = ['cat', 'dog', 'bat']; (found on mdn)
// console.log(pets.includes('cat'));
// Expected output: true

const bigWin = (array) => {
    for (let i = 0; i < array.length; i++)
}
// I am going to be honest I tried and I looked up how to do this and i found a way to do it but I had no idea of what was going on in the function so I did not use it. This challenge stumped me way more than the others. I knew I had to iterate over the array twice but i didnt know how to accomplish that without using my index twice and having the index check against itself. I don't know if that is even possible. I have no clue how I even came to that point but I just have this crazy feeling that that's possible and it'll confuse the program. I just couldn't figure out how to word my search parameters to specify that.  
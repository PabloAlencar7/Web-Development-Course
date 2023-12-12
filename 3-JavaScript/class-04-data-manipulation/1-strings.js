let myName = "Pablo";

// prototype (chain)
console.log(myName.__proto__);

console.log(myName.length);
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());
console.log(myName.slice(0, 2));
console.log(myName.slice(3));
console.log(myName.slice(-3));
console.log(myName.substring(2, 5));

myName[0] = "Q";
console.log(myName); // string immutable

myName = "Other Text";
console.log(myName);    

let phrase = "    I'm a web developer     ";

console.log(phrase.replace("web", "Javascript"));
console.log(phrase.indexOf("w"));
console.log(phrase.trim());
console.log(phrase.trim().split(" "));
console.log(phrase.trim().split(" ").join("$"));
console.log(phrase.trim().split("").reverse().join(""));

console.log(phrase.toLowerCase().includes("WEB".toLowerCase()));
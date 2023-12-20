const array = Array(1, "2", () => "A", [], {});

console.log(array);
console.log(array.length);
console.log(array[2]());

const gtaChars = ["Sweet", "Ryder", "Big Smoke"];
console.log(gtaChars);

// LIFO (Last in First out)
gtaChars.push("Cesar");
console.log(gtaChars);

gtaChars.pop();
console.log(gtaChars);

gtaChars.pop();
console.log(gtaChars);

// FIFO (First in First out)
gtaChars.unshift("CJ");
console.log(gtaChars);

gtaChars.shift();
console.log(gtaChars);

console.log(gtaChars.includes("Sweet"));
console.log(gtaChars.indexOf("Sweet"));
console.log(gtaChars.join("-"));
console.log(gtaChars.splice(0, 1));
console.log(gtaChars);

const arrayLetters = ["A", "B", "C", "D"];
const index1 = arrayLetters[0];
// destructure
const [item1, item2, item3, item4] = arrayLetters;
console.log(item1, item2, item3, item4);
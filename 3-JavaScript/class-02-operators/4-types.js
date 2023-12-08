// Truthy                       Falsy
// 1, 1.5, -1                       0
// " ", "0", "false"               ""
// {}                            null
// []                       undefined
// Infinity, -Infinity            NaN



console.log(true ? "true" : "false");
console.log(1 ? "true" : "false");
console.log(0 ? "true" : "false");
console.log(-1 ? "true" : "false");
console.log("text" ? "true" : "false");
console.log("" ? "true" : "false");
console.log(" " ? "true" : "false");
console.log({} ? "true" : "false");
console.log(null ? "true" : "false");

// Nullish/Logical Coalescing Operator

console.log("Pablo" || "Test");
console.log("" || "Test");
console.log(0 || "Test");

console.log(0 ?? "test");
console.log(false ?? "test");
console.log(null ?? "test");
console.log(undefined ?? "test");

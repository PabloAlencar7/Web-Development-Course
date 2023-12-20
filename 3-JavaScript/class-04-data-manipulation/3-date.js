const dateNow = new Date();
const dateNowTime = new Date().getTime();

console.log(dateNow)
console.log(dateNow.toLocaleDateString("pt-br"));
console.log(dateNow.toLocaleTimeString("pt-br"));
console.log(dateNowTime);

console.log(dateNow.getDay());
console.log(dateNow.getDate());
console.log(dateNow.getMonth() + 1);
console.log(dateNow.getFullYear());

// dateNow.setDate(dateNow.getDate() + 1);
// dateNow.setMonth(dateNow.getMonth() + 1);
// dateNow.setFullYear(dateNow.getFullYear() + 1);

console.log(dateNow.toLocaleString());

console.log(dateNow.toLocaleDateString("pt-br", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
})
);

const date1 = new Date("2023-12-27");
const date2 = new Date("2023-09-25");

console.log((date1 - date2) / 1000 / 60 / 60 / 24);
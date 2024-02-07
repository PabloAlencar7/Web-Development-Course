// Question 1

let stringParaBurros = "Isso é uma string, seu imbecil.";
let leet = 1337;
let verdade = true;
let souLindo = (nao) => "nao";
let ddlc = ["Sayori", "Yuri", "Natsuki", "Monika"];
let jujutsuKaisen = {
     name: "Sukuna",
     type: "Curse",
     aka: "Curse King",
     domainExpansion: "Malevolent Shrine",
}
console.log(stringParaBurros);
console.log(leet);
console.log(verdade);
console.log(souLindo);
console.log(ddlc);
console.log(jujutsuKaisen);

// Question 2

let num1 = 2;
let num2 = 3;
let sum = num1 + num2;
let sub = num1 - num2;
let mult = num1 * num2;
let div = num1 / num2;
let rest = num1 % num2;
let pow = num1 ** num2;
let pow3 = Math.pow(num1, 3)
let root = Math.sqrt(144);

console.log(sum);
console.log(sub);
console.log(mult);
console.log(div);
console.log(rest);
console.log(pow);
console.log(pow3);
console.log(root);

// Question 3

function test(info) {
  return "JavaScript " + info;
}

console.log(test("é bom"));

// Question 4

let top4Animes = ["Akira", "Jujutsu Kaisen", "Naruto"];
top4Animes.push("Devilman Crybaby");
let akira = 0;
let deathNote = "Death Note";
top4Animes[akira] = deathNote;
console.log(top4Animes);

// Question 5

for (let i = 0; i < top4Animes.length; i++) {
  console.log(top4Animes[i]);
}

// Question 6

let count = 0;

while(count <= 100) {
  if(count < 40 || count >= 70) {
    console.log(count);
  }
  count++;
}

// Question 7

function verificarMulta(velocidade) {
    const limiteMaximo = 60;
    const metadeMaximo = limiteMaximo / 2;
  
    if (velocidade > limiteMaximo) {
      return "Motorista multado por velocidade alta.";
    } else if (velocidade < metadeMaximo) {
      return "Motorista multado por velocidade baixa.";
    } else {
      return "Motorista dentro do limite de velocidade.";
    }
  }

  console.log(verificarMulta(10)); 

  // Question 8

  const salary = [2000, 2800, 3000, 4000, 2200, 7500, 3650, 8000, 2000, 5000];
  let newSalary = salary.map(salary => (salary * 1.1));
  console.log(newSalary);

  console.log(newSalary.reduce((a, b) => a + b, 0));

  






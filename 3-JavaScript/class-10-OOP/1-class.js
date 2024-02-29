// OOP - Paradigm
// entities or objects (real world)
// properties (attributes / variables)
// nethods (functions)

class Control {
    constructor(temp) {
        this.temperature = temp;
        this.color = "white";
        this.isOn = false;
    }

    on_Off() {
        this.isOn = !this.isOn
    }

    tempUpper() {
        this.temperature = this.temperature + 1;
    }
    
    tempLower() {
        this.temperature = this.temperature - 1;
    }

}

const airControl = new Control(18);
const airControl2 = new Control(22);

console.log(airControl.temperature);
console.log(airControl2.temperature);
console.log(airControl2.color);

airControl.tempUpper();
console.log(airControl.temperature);

airControl.tempLower();
console.log(airControl.temperature);

const buttonUpper = 
document.querySelector(".buttonUpper");
const buttonLower = 
document.querySelector(".buttonLower");

buttonUpper.addEventListener("click", () => {
    airControl.tempUpper();
    console.log(airControl.temperature);
})

buttonLower.addEventListener("click", () => {
    airControl.tempLower();
    console.log(airControl.temperature);
})

airControl.on_Off();
console.log(airControl.isOn);

const buttonOnOff = 
document.querySelector(".buttonOnOff");

buttonOnOff.addEventListener("click", () => {
    airControl.on_Off();
    console.log(airControl.isOn);
})





/* const name = "Klinsman";
const age = 24;
const prof = "Developers";

console.log(`Olá meu nome é ${name} tenho ${age} e minha profissão é ${prof}.`); */

const person = {
    name: "Klinsman",
    age: 27,
    teacher: true,
    sayHello: function() {
        console.log(`Olá meu nome é ${this.name} tenho ${this.age} anos.`);
    },
};

person.sayHello();
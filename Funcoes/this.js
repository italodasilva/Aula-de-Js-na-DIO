function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
    nome: "Kezia",
    idade: 16,
};

const pessoa2 = {
    nome: "Italo",
    idade: 17,
};

const animal = {
    nome: "Bidu",
    idade: 7,
    raca: "Yokshire",
};

const animal2 = {
    nome: "Barulho",
    idade: 1,
    raca: "Shit-shuz",
};


console.log(calculaIdade.call(pessoa1, 30));
console.log(calculaIdade.call(pessoa2, 27));
console.log(calculaIdade.call(animal, 7));
console.log(calculaIdade.call(animal2, 8));
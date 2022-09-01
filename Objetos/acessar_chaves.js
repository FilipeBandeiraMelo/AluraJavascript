const cliente = {
    nome:"Andre",
    idade:36,
    cpf:"1231241241",
    email: "andre@email.com"
}

const chaves = ["nome", "idade", "cpf", "email"]

//console.log(cliente[chaves[0]]);

chaves.forEach(i => console.log(cliente[i]))
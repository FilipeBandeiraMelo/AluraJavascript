const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "1231241241",
    email: "andre@email.com",
    fones: ["55912345498", "55234124423"],
    dependentes: [{
        nome: "Sara Silva",
        parentesco: "filha",
        dataNasc: "20/03/2000"
    }]
}

cliente.dependentes.push({
    nome: "Samia Maria",
    parentesco: "filha",
    dataNasc: "04/01/2010"
})

//acessar nome filha mais nova

console.log(cliente.dependentes[1].nome)

const filhaMaisNova = cliente.dependentes.filter(
    dependente => dependente.dataNasc==="04/01/2010"
)

console.log(filhaMaisNova[0].nome)
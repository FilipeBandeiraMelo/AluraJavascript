const cliente = {
    nome:"Andre",
    idade:36,
    cpf:"1231241241",
    email: "andre@email.com",
    fones:["55912345498", "55234124423"]
}

cliente.dependentes = {
    nome: "Sara",
    parentesco: "filha",
    dataNasc: "20/03/2000"
}

console.log(cliente)

cliente.dependentes.nome ="Sara Silva"

console.log(cliente)
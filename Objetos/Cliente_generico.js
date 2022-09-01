function Cliente(nome,cpf,email,saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function (valor){
        this.saldo += valor
    }
}


const andre = new Cliente("André","1234123","andre@email.com",100)
const joaquim = new Cliente("Joaquim","55555555","joaquim@email.com",50)
andre.depositar(30)
joaquim.depositar(10)

console.log(andre)
console.log(joaquim)



class Cliente{
  constructor (nome, email, cpf, saldo, soma){
    this.nome = nome
    this.email = email
    this.cpf = cpf
    this.saldo = saldo
    this.soma = soma
    
  }
  depositar(valor){
    this.saldo += valor
  }
  exibirSaldo(){
    console.log(this.saldo)
  }
  adicao(n1,n2){
    return this.soma = n1+n2;
  }
  exibirSoma(){
    console.log(`${this.nome} efetuou a soma e o resultado deu ${this.soma}`)
  }
}

const andre = new Cliente("Andre","andre@email.com","444444",100)
const anderson = new Cliente("Anderson")
anderson.adicao(4,5)
anderson.exibirSoma()
andre.adicao(3,5)
andre.exibirSoma()


andre.depositar(30)
andre.exibirSaldo()

console.log(andre)
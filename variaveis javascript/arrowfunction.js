const soma = (a, b) => (a+b) 

const adicao = soma(3,4)
const adicao2 = soma(4, 5)

console.log(adicao + adicao2)

//arrow function com + de 1 linha

const somaNumerosPequenos = (num1 ,num2) => {
    if (num1 > 10 || num2 > 10){
        return "somente números de 1 a 9" 
    } else {
        return num1 + num2;
    }
}

console.log(somaNumerosPequenos (2, 11))
const clientes = [
    {
        nome: 'Andre',
        idade: 36,
        cpf: '12543652266',
        dependentes: [
            {
                nome: 'Sara Silva',
                parentesco: 'filha',
                dataNasc: '20/03/2011'
            },
            {
                nome: "Samia Maria",
                parentesco: "filha",
                dataNasc: "04/01/2014"
            }
        ],
    },
    {
        nome: 'Juliana',
        idade: 25,
        cpf: '333333333',
        dependentes: [
            {
                nome: 'Pimpolho',
                parentesco: 'filho',
                dataNasc: '24/07/2013'
            },
            {
                nome: "Marta",
                parentesco: "filha",
                dataNasc: "03/10/2010"
            }
        ],
    },            
]

const listaDependentes = [...clientes[0].dependentes,...clientes[1].dependentes];

console.table(listaDependentes)

let lista = [];
for (let chave in clientes){
    lista.push(...clientes[chave].dependentes)
    
}
console.log(lista)
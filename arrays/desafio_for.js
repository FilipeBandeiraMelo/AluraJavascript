let lista = [];
let showIndex = [0];
let listaIncremento = 100;
let incrementoIndex = 1;
for (let i = 0; i <= 5; i++) {

    lista.push(listaIncremento);
    listaIncremento +=100;
    showIndex.push(incrementoIndex);
    incrementoIndex ++;
}

console.log(lista);
console.log(showIndex);
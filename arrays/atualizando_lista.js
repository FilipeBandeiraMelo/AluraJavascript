const listaDeChamada = ["João", "Juliana", "Ana", "Caio", "Vivian", "Anderson", "Manoel", "Afonso"]
//regra dos paramentros indice, quantidade de elementos alterados, adicional  
listaDeChamada.splice(2, 2, "Rodrigo")

console.log(listaDeChamada)

animaisDoAquario = ['🐋', '🐙', '🐬', '🦈']

animaisDoAquario.splice(1,0,'🐠')

console.log(animaisDoAquario)
animaisDoAquario.splice(3,2,'🐟')

console.log(animaisDoAquario)

console.log(listaDeChamada[0][0])
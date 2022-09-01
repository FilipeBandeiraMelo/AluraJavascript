let spaceships = [["Colossus", 40], ["Elemental", 20], "Golias", "Helmet"]

console.log(spaceships[2][1])


let discoverySpaceships = ["Elemental", "Darwin", "Ártemis"]

let battleSpaceships = ["Fenix", "Golias", "Helmet"]

let extractionSpaceships = ["Deméter", "Puller"]



let randomSpaceships = [

 discoverySpaceships.indexOf("Elemental"), 

 battleSpaceships.indexOf("Helmet"), 

 extractionSpaceships.indexOf("Puller")

]

console.log(randomSpaceships)

let spaceshipsList = ["Colossus", "Helmet", ["Fenix", "Revivor"], "Supernova"]

spaceshipsList.pop()

spaceshipsList.pop()

spaceshipsList.push("Elemental")

spaceshipsList.unshift("Eagle")

spaceshipsList.shift()

spaceshipsList.unshift("")

console.log(spaceshipsList)
const alunos = ["Melissa", "Helena", "Rodrigo", "Caio"];
const medias = [10,7,9,6];

//includes -> boolean (retorna true or false);
//indexOf -> retorna número do índice

let listaDeNotasEAlunos = [alunos, medias];

const exibeNomeNota = (nomeDoAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)){
        let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno);
                                //[0][3]
        return listaDeNotasEAlunos[0][indice] + ", sua média é "
                           //[1]  [3] 
        + listaDeNotasEAlunos[1][indice]
    } else {
        return "Aluno não cadastrado";
    }
}
console.log(exibeNomeNota("Caio"))



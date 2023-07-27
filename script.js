//Prática 1
/* function imprimirObjeto () {
    //digite a sua solução aqui
    const estudante = {
        nome: "Caio",
        sobrenome: "Amorielo",
        numeroDeMatricula: 4827679,
        notasDoSemestre: [9, 5, 10, 7, 8,],
    }
    console.log(estudante)
    console.log(estudante.nome)
    console.log(estudante.sobrenome)
    console.log(estudante.numeroDeMatricula)
    console.log(estudante.notasDoSemestre)


}
imprimirObjeto() */


//Prática 2


function imprimirObjeto () {
    //digite a sua solução aqui
    const estudante = {
        nome: "Caio",
        sobrenome: "Amorielo",
        numeroDeMatricula: 4827679,
        notasDoSemestre: [9, 5, 10, 7, 8,]
    }

    estudante.modulo = "JavaScript"
    console.log(estudante.nome)
    console.log(estudante.modulo)
    console.log(estudante.notasDoSemestre[1])
 //Prática 3
    let copiaEstudante = {...estudante}
    copiaEstudante.nome = "Astrodev"
    copiaEstudante.notasDoSemestre.push(9)
    copiaEstudante.modulo = "NodeJS"
    console.log(copiaEstudante)

    const estudantesLabenu = [estudante, copiaEstudante]

    console.log(estudantesLabenu)


}
imprimirObjeto()

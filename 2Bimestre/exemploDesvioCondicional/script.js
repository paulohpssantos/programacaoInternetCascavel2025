let nota1Bim = document.querySelector("#nota1Bim");
let nota2Bim = document.querySelector("#nota2Bim");
let btAprovacao = document.querySelector("#btAprovacao");
let h3Resultado = document.querySelector("#h3Resultado");

function calcularMediaAluno(){

    //retornando valores dos inputs e 
    //convertendo em números
    let nota1 = Number(nota1Bim.value);
    let nota2 = Number(nota2Bim.value);

    //Calcular a média
    let media = (nota1 + nota2) / 2;

    //Verifica se o aluno está aprovado ou não
    if(media >= 60){
        h3Resultado.textContent = "O aluno esta APROVADO!!!";
    }else{
        h3Resultado.textContent = "O aluno esta REPROVADO!!!";
    }
    
    


}
btAprovacao.onclick = function(){
    calcularMediaAluno();
}
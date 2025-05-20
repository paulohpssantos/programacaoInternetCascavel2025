let inputNum1 = document.querySelector("#inputNum1");
let inputNum2 = document.querySelector("#inputNum2");
let inputNum3 = document.querySelector("#inputNum3");
let h3Resultado = document.querySelector("#h3Resultado");
let btCalcular = document.querySelector("#btCalcular");

function calcularMedias(){

    let vlr1 = Number(inputNum1.value);
    let vlr2 = Number(inputNum2.value);
    let vlr3 = Number(inputNum3.value);

    //calcula média arotmética:
    // (v1 + v2 + v3)
    // ---------------
    //   qtdValores 
    let mediaAritmetica = (vlr1 + vlr2 + vlr3) / 3;

    //calcular média ponderada
    //pesos 3, 2 e 5
    // (v1 x p1) + (v2 x p2) + (v3 x p3)
    // ---------------------------------
    //          (p1 + p2 + p3) 
    let mediaPonderada = ((vlr1 * 3) + (vlr2 * 2) + (vlr3 * 5)) / (3 + 2 + 5);

    //soma das médias 
    let somaMedias = mediaAritmetica + mediaPonderada;

    //médias das médias
    let mediaMedias = somaMedias / 2;

    h3Resultado.innerHTML = "Media Aritmetica: "+mediaAritmetica+"<br>"+
                            "Media Ponderada: "+mediaPonderada+"<br>"+
                            "Soma das Medias: "+somaMedias+"<br>"+
                            "Media das Medias: "+mediaMedias

}

btCalcular.onclick = function(){
    calcularMedias();
}
    let h1Texto = document.querySelector("#h1Texto");
    let inputTexto = document.querySelector("#inputTexto");
    let btTrocaTexto = document.querySelector("#btTrocaTexto");

    function trocarTexto(){
        //retornando o texto digitado no campo
        let textoDigitado = inputTexto.value;

        //Alterando o texto do elemento h1
        h1Texto.textContent = textoDigitado;
    }

    btTrocaTexto.onclick = function(){
        trocarTexto();
    }
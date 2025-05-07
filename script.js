
let conteudo = document.getElementById('conteudo');
let conteudooculto = document.getElementById('conteudooculto');
let conteudo1 = document.getElementById("conteudo1");
let conteudo2 = document.getElementById("conteudo2");
let conteudo3 = document.getElementById("conteudo3");

function btnao(){
    alert("TEM CERTEZA?");
    conteudo.style.display = 'none';
    conteudooculto.style.display = "flex";
};

function voltarinicio(){
    conteudooculto.style.display = "none";
    conteudo.style.display = "flex";
    
};

function btsim(){
    conteudo.style.display = 'none';
    conteudo1.style.display = "flex";
    
}

function continuarcont2(){
    conteudo1.style.display = "none";
    conteudo2.style.display = "flex";

}

function continuarcont3(){
    conteudo2.style.display = "none";
    conteudo3.style.display = "flex"


}



function cliqueaqui(){
    com = setInterval(function() {
        var contagem1 = document.getElementById('dias').innerHTML;
        var soma1 = parseInt(contagem1) + 1
        document.getElementById('dias').innerHTML = soma1 + " Dias";

        if (soma1 === 6209){
           clearInterval(com);
        }

        
    }, 1);


    com2 = setInterval(function(){
        var contagem2 = document.getElementById("semanas").innerHTML;
        var soma2 = parseInt(contagem2) + 1
        document.getElementById("semanas").innerHTML = soma2 + " Semanas";

        if (soma2 === 887){
            clearInterval(com2);
        }
    }, 5);

    com3 = setInterval(function(){
        var contagem3 = document.getElementById("meses").innerHTML;
        var soma3 = parseInt(contagem3) + 1
        document.getElementById("meses").innerHTML = soma3 + " meses";

        if (soma3 === 206){
            clearInterval(com3);
        }
    }, 20);

    com4 = setInterval(function(){
        var contagem4 = document.getElementById("anos").innerHTML;
        var soma4 = parseInt(contagem4) + 1
        document.getElementById("anos").innerHTML = soma4 + " Anos";

        if (soma4 === 17){
            clearInterval(com4);
        }
    }, 200)
};
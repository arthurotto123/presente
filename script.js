let conteudo = document.getElementById('conteudo');
let inicio = document.getElementById("inicio");
let conteudooculto = document.getElementById('conteudooculto');
let conteudo1 = document.getElementById("conteudo1");
let conteudo2 = document.getElementById("conteudo2");
let conteudo3 = document.getElementById("conteudo3");
let conteudo4 = document.getElementById("conteudo4");
let conteudo5 = document.getElementById("conteudo5");


function eventoFinal() {
    inicio.style.display = "none";
    conteudo.style.display = "flex";
  }

  function atualizarContador() {
    const agora = new Date();
    const destino = new Date(2025, 4, 7, 23, 12, 0); // mês 4 = Maio (0-indexado)

    const diferenca = destino.getTime() - agora.getTime();

    if (diferenca <= 0) {
      clearInterval(intervalo);
      document.getElementById('dias').innerHTML = '00';
      document.getElementById('horas').innerHTML = '00';
      document.getElementById('minutos').innerHTML = '00';
      document.getElementById('segundos').innerHTML = '00';
      eventoFinal();
      return;
    }

    const totalSegundos = Math.floor(diferenca / 1000);
    const dias = Math.floor(totalSegundos / (60 * 60 * 24));
    const horas = Math.floor((totalSegundos % (60 * 60 * 24)) / (60 * 60));
    const minutos = Math.floor((totalSegundos % (60 * 60)) / 60);
    const segundos = totalSegundos % 60;

    document.getElementById('dias').innerHTML = dias.toString().padStart(2, '0');
    document.getElementById('horas').innerHTML = horas.toString().padStart(2, '0');
    document.getElementById('minutos').innerHTML = minutos.toString().padStart(2, '0');
    document.getElementById('segundos').innerHTML = segundos.toString().padStart(2, '0');
  }

  const intervalo = setInterval(atualizarContador, 1000);
  atualizarContador();


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
    conteudo3.style.display = "flex";


}

function presente(){
    conteudo3.style.display = "none";
    conteudo4.style.display = "flex"
}

function reais2(){
    conteudo3.style.display = "none";
    conteudo5.style.display = "flex";
}
function voltar2(){
    conteudo5.style.display = "none";
    conteudo3.style.display = "flex";
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
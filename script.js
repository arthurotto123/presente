let conteudo = document.getElementById('conteudo');
let inicio = document.getElementById("inicio");
let conteudooculto = document.getElementById('conteudooculto');
let conteudo1 = document.getElementById("conteudo1");
let conteudo2 = document.getElementById("conteudo2");
let conteudo3 = document.getElementById("conteudo3");
let conteudo4 = document.getElementById("conteudo4");
let conteudo5 = document.getElementById("conteudo5");
let conteudo6 = document.getElementById("conteudo6");


function eventoFinal() {
    inicio.style.display = "none";
    conteudo.style.display = "flex";
  };

  function atualizarContador() {
    const agora = new Date();
    const destino = new Date(2025, 4, 18, 0, 0, 0); // mês 4 = Maio (0-indexado)

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
  };

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

    window.scrollTo({
        top: 0,
        behavior: "smooth" 
    });
    
};

function continuarcont2(){
    conteudo1.style.display = "none";
    conteudo2.style.display = "flex";

    window.scrollTo({
        top: 0,
        behavior: "smooth" 
    });


};

function continuarcont3(){
    conteudo2.style.display = "none";
    conteudo3.style.display = "flex";

    window.scrollTo({
        top: 0,
        behavior: "smooth" 
    });


}

function presente(){
    conteudo3.style.display = "none";
    conteudo4.style.display = "flex"

    window.scrollTo({
        top: 0,
        behavior: "smooth" 
    });
}

function reais2(){
    conteudo3.style.display = "none";
    conteudo5.style.display = "flex";

    window.scrollTo({
        top: 0,
        behavior: "smooth" 
    });
}
function voltar2(){
    conteudo5.style.display = "none";
    conteudo3.style.display = "flex";

    window.scrollTo({
        top: 0,
        behavior: "smooth" 
    });
}


function sim4(){
    conteudo4.style.display = "none";
    conteudo6.style.display = "flex";

    window.scrollTo({
        top: 0,
        behavior: "smooth" 
    });
}



function cliqueaqui() {
    let dias = 0, semanas = 0, meses = 0, anos = 0;

    com = setInterval(function () {
        dias++;
        document.getElementById('dias1').innerHTML = dias + " Dias";

        if (dias === 6209) {
            clearInterval(com);
        }
    }, 1);

    com2 = setInterval(function () {
        semanas++;
        document.getElementById("semanas").innerHTML = semanas + " Semanas";

        if (semanas === 887) {
            clearInterval(com2);
        }
    }, 5);

    com3 = setInterval(function () {
        meses++;
        document.getElementById("meses").innerHTML = meses + " meses";

        if (meses === 206) {
            clearInterval(com3);
        }
    }, 20);

    com4 = setInterval(function () {
        anos++;
        document.getElementById("anos").innerHTML = anos + " Anos";

        if (anos === 17) {
            clearInterval(com4);
        }
    }, 200);
}

const botaoNao = document.getElementById("nao4");

    botaoNao.addEventListener("mouseover", function () {
      // Torna o botão absoluto temporariamente para movê-lo
      this.classList.add("fugindo");

      const larguraMax = window.innerWidth - botaoNao.offsetWidth;
      const alturaMax = window.innerHeight - botaoNao.offsetHeight;

      const novaEsquerda = Math.random() * larguraMax;
      const novoTopo = Math.random() * alturaMax;

      this.style.left = novaEsquerda + "px";
      this.style.top = novoTopo + "px";
    });

    // Ao recarregar, remove classe de "fuga" para ele voltar ao layout natural
    window.addEventListener("load", function () {
      botaoNao.classList.remove("fugindo");
      botaoNao.style.left = "";
      botaoNao.style.top = "";
    });


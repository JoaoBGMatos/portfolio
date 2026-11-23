// ==========================================
// PORTFÓLIO - JOÃO B. MATOS
// "O Diário do João" - arquivo de JavaScript
// ==========================================


// ---------- 1. DATA DE HOJE NO TOPO DO JORNAL ----------
const diasDaSemana = [
  "domingo", "segunda-feira", "terça-feira", "quarta-feira",
  "quinta-feira", "sexta-feira", "sábado"
];

const meses = [
  "janeiro", "fevereiro", "março", "abril", "maio", "junho",
  "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
];

const hoje = new Date();

// getDay() devolve o número do dia da semana (0 = domingo)
// getMonth() devolve o número do mês (0 = janeiro)
const textoData = "Brasília, " + diasDaSemana[hoje.getDay()] + ", " +
  hoje.getDate() + " de " + meses[hoje.getMonth()] + " de " + hoje.getFullYear();

document.getElementById("data-hoje").textContent = textoData;


// ---------- 2. MENU DO CELULAR ----------
const botaoMenu = document.getElementById("botao-menu");
const menu = document.getElementById("menu");

botaoMenu.addEventListener("click", function () {
  menu.classList.toggle("aberto");

  // troca o texto do botão
  if (menu.classList.contains("aberto")) {
    botaoMenu.textContent = "✕ Fechar";
  } else {
    botaoMenu.textContent = "☰ Cadernos";
  }
});

// fecha o menu quando a pessoa escolhe um caderno
const linksMenu = document.querySelectorAll(".menu a");

for (let i = 0; i < linksMenu.length; i++) {
  linksMenu[i].addEventListener("click", function () {
    menu.classList.remove("aberto");
    botaoMenu.textContent = "☰ Cadernos";
  });
}


// ---------- 3. AUMENTAR E DIMINUIR A LETRA ----------
// todo o site usa "rem", então mudar o tamanho da letra do <html>
// faz o site inteiro crescer ou diminuir junto
let tamanhoLetra = 16;      // tamanho inicial em pixels
const tamanhoMinimo = 14;
const tamanhoMaximo = 22;

function mudarTamanhoLetra() {
  document.documentElement.style.fontSize = tamanhoLetra + "px";
}

document.getElementById("aumentar-letra").addEventListener("click", function () {
  if (tamanhoLetra < tamanhoMaximo) {
    tamanhoLetra = tamanhoLetra + 2;
    mudarTamanhoLetra();
  }
});

document.getElementById("diminuir-letra").addEventListener("click", function () {
  if (tamanhoLetra > tamanhoMinimo) {
    tamanhoLetra = tamanhoLetra - 2;
    mudarTamanhoLetra();
  }
});


// ---------- 4. BOTÃO DE IMPRIMIR ----------
// abre a janela de impressão do navegador (o visual da impressão está no CSS)
document.getElementById("imprimir").addEventListener("click", function () {
  window.print();
});


// ---------- 5. FRASE DO DIA ----------
// cada frase tem o texto e quem disse
const frases = [
  { texto: "Primeiro, resolva o problema. Depois, escreva o código.", autor: "John Johnson" },
  { texto: "Falar é fácil. Me mostre o código.", autor: "Linus Torvalds" },
  { texto: "Qualquer tolo escreve código que um computador entende. Bons programadores escrevem código que humanos entendem.", autor: "Martin Fowler" },
  { texto: "Programas devem ser escritos para que pessoas os leiam, e só por acaso para que máquinas os executem.", autor: "Harold Abelson" },
  { texto: "A melhor maneira de prever o futuro é inventá-lo.", autor: "Alan Kay" },
  { texto: "Simplicidade é pré-requisito para a confiabilidade.", autor: "Edsger Dijkstra" }
];

const fraseTexto = document.getElementById("frase-texto");
const fraseAutor = document.getElementById("frase-autor");
let fraseAtual = 0;   // a primeira frase já aparece escrita no HTML

document.getElementById("botao-frase").addEventListener("click", function () {
  // passa para a próxima frase; depois da última, volta para a primeira
  fraseAtual++;

  if (fraseAtual == frases.length) {
    fraseAtual = 0;
  }

  fraseTexto.textContent = '"' + frases[fraseAtual].texto + '"';
  fraseAutor.textContent = frases[fraseAtual].autor;
});


// ---------- 6. ANO ATUAL NO RODAPÉ ----------
document.getElementById("ano").textContent = hoje.getFullYear();

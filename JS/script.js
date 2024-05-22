//Comeco Animacoes Ondas
const Onda1 = document.getElementById("Onda1");
const Onda2 = document.getElementById("Onda2");
const Onda3 = document.getElementById("Onda3");
const Onda4 = document.getElementById("Onda4");
//
window.addEventListener("scroll", function () {
  let PosicaoRolagem = window.scrollY;
  Onda1.style.backgroundPositionX = 400 + PosicaoRolagem * 4 + "px";
  Onda2.style.backgroundPositionX = 300 + PosicaoRolagem * -4 + "px";
  Onda3.style.backgroundPositionX = 200 + PosicaoRolagem * 2 + "px";
  Onda4.style.backgroundPositionX = 100 + PosicaoRolagem * -2 + "px";
});
//FimRolangem Animacoes Ondas.

//Mudar Background Header
window.addEventListener("scroll", function () {
  let Header = document.getElementById("Header");
  let ImgHome = document.getElementById("ImgHome");
  let TxtHome = document.getElementById("TextoHome");

  Header.classList.toggle("RolagemBackgroundHeader", window.scrollY > 600);
  ImgHome.classList.toggle("ImgHomeOff", window.scrollY > 600);
  TxtHome.classList.toggle("ImgHomeOff", window.scrollY > 600);
});
//Fim Mudanca Background Header

window.addEventListener("scroll", function () {
  let BackgroundMain = document.getElementById("MainBackground");
  // Verifica se a posição de rolagem está entre 1700 e 1900
  if (window.scrollY > 1750 && window.scrollY < 2700) {
    BackgroundMain.classList.add("MainBackground");
  } else {
    BackgroundMain.classList.remove("MainBackground");
  }
});

//
//
//Produtos 3d
VanillaTilt.init(document.querySelectorAll(".Produto"), {
  max: 15,
  speed: 400,
  glare: true,
  "max-glare": 0.5
});

//AvaliacoesClientes
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

//
// Função para remover a classe de todos os itens do menu de navegação e adicionar somente quando "Produtos" for clicado
document.querySelectorAll(".MenuNav a").forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Impede o comportamento padrão do link
    let BackgroundMain = document.getElementById("MainBackground");
    BackgroundMain.classList.remove("MainBackground");
    if (event.target.id === "ProdutosHeader") {
      BackgroundMain.classList.add("MainBackground");
    }
  });
});

//navegacaoHeader
document.addEventListener("DOMContentLoaded", function () {
  const InicioHeader = document.getElementById("InicioHeader");
  const SobreHeader = document.getElementById("SobreHeader");
  const ProdutosHeader = document.getElementById("ProdutosHeader");
  const AvaliacoesHeader = document.getElementById("AvaliacoesHeader");

  InicioHeader.addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("inicio").scrollIntoView({ behavior: "smooth" });
  });

  SobreHeader.addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("sobre").scrollIntoView({ behavior: "smooth" });
  });

  ProdutosHeader.addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("produtos").scrollIntoView({ behavior: "smooth" });
  });

  AvaliacoesHeader.addEventListener("click", function (event) {
    event.preventDefault();
    document
      .getElementById("avaliacoes")
      .scrollIntoView({ behavior: "smooth" });
  });
});

//navegacao footer

document.addEventListener("DOMContentLoaded", function () {
  const InicioFooter = document.getElementById("InicioFooter");
  const SobreFooter = document.getElementById("SobreFooter");
  const ProdutosFooter = document.getElementById("ProdutosFooter");
  const AvaliacoesFooter = document.getElementById("AvaliacoesFooter");

  InicioFooter.addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("inicio").scrollIntoView({ behavior: "smooth" });
  });

  SobreFooter.addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("sobre").scrollIntoView({ behavior: "smooth" });
  });

  ProdutosFooter.addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("produtos").scrollIntoView({ behavior: "smooth" });
  });

  AvaliacoesFooter.addEventListener("click", function (event) {
    event.preventDefault();
    document
      .getElementById("avaliacoes")
      .scrollIntoView({ behavior: "smooth" });
  });
});

//botao subir top
window.addEventListener("scroll", function () {
  let BotaoTop = document.getElementById("BtnTop");
  BotaoTop.classList.toggle("BtnTopOff", window.scrollY < 600);
  BotaoTop.addEventListener("click", function () {
    window.scrollTo({
      top: 0
    });
  });
});

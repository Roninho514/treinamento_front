const $ativaMenu = document.getElementById('ativaMenu');
const $menuLateral = document.getElementById('menuLateral');
const $desativaMenu = document.getElementById('desativaMenu');
const $botaoSlideDireito = document.getElementById('botaoSlideDireito');
const $botaoSlideEsquerdo = document.getElementById('botaoSlideEsquerdo');
const $carrosselItem = document.getElementById('carrosselItem');
const $slides = document.querySelectorAll(".carrossel-item");
const $slideclasse = document.getElementsByClassName("slide-atual");
let posicaoSlide = 0;
let n = 0

$ativaMenu.addEventListener("click", function(){
   $menuLateral.style.display = "flex";
   $ativaMenu.style.display = "none";
})

$desativaMenu.addEventListener("click", function(){
   $menuLateral.style.display = "none";
   $ativaMenu.style.display = "flex";
   document.getElementById("ativaMenu").className = "bota-ativa-menu-desativado";
})

$botaoSlideDireito.addEventListener("click",function(){
   slideAtual = $slides[posicaoSlide];
   slideAtual.classList.remove("slide-atual");
   posicaoSlide = passaSildeDireito(posicaoSlide,$slides);
   slideAtual = $slides[posicaoSlide];
   slideAtual.classList.add("slide-atual");
})
$botaoSlideEsquerdo.addEventListener("click",function(){
   slideAtual = $slides[posicaoSlide];
   slideAtual.classList.remove("slide-atual");
   posicaoSlide = passaSildeEsquerdo(posicaoSlide,$slides);
   slideAtual = $slides[posicaoSlide];
   slideAtual.classList.add("slide-atual");
})

function passaSildeDireito(posicaoSlide,slides){
   posicaoSlide++;
   if (posicaoSlide >= slides.length){
      posicaoSlide = 0;
   }
   return posicaoSlide; 
}
function passaSildeEsquerdo(posicaoSlide,slides){
   posicaoSlide--;
   if (posicaoSlide < 0){
      posicaoSlide = slides.length - 1;
   }
   return posicaoSlide; 
}
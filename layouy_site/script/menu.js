const $ativaMenu = document.getElementById('ativaMenu');
const $menuLateral = document.getElementById('menuLateral');
const $desativaMenu = document.getElementById('desativaMenu')

$ativaMenu.addEventListener("click", function(){
   $menuLateral.style.display = "flex";
   $ativaMenu.style.display = "none";
})

$desativaMenu.addEventListener("click", function(){
   $menuLateral.style.display = "none";
   $ativaMenu.style.display = "flex";
   document.getElementById("ativaMenu").className = "bota-ativa-menu-desativado";
})
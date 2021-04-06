
function loadCSS(url) {
  var lnk = document.createElement('link');
  lnk.setAttribute('type', "text/css" );
  lnk.setAttribute('rel', "stylesheet" );
  lnk.setAttribute('href', "https://guilhermeartt.github.io/proepicode/cursos/codigos/style_curso.css" );
  
  document.getElementsByTagName("head").item(0).appendChild(lnk);
  
}
loadCSS(URL) 

function loadNAV(url) {
  var lnk = document.createElement('link');
  lnk.setAttribute('type', "text/css" );
  lnk.setAttribute('rel', "stylesheet" );
  lnk.setAttribute('href', "https://guilhermeartt.github.io/proepicode/cursos/codigos/nav.css" );
  
  document.getElementsByTagName("head").item(0).appendChild(lnk);
  
}
loadNAV(URL)

 
function loadMODAL(url) {
  var lnk = document.createElement('link');
  lnk.setAttribute('type', "text/css" );
  lnk.setAttribute('rel', "stylesheet" );
  lnk.setAttribute('href', "https://guilhermeartt.github.io/proepicode/cursos/codigos/modal.css" );
  
  document.getElementsByTagName("head").item(0).appendChild(lnk);
  
}
loadMODAL(URL)

function loadGRID(url) {
  var lnk = document.createElement('link');
  lnk.setAttribute('type', "text/css" );
  lnk.setAttribute('rel', "stylesheet" );
  lnk.setAttribute('href', "https://guilhermeartt.github.io/proepicode/cursos/codigos/grid.css" );
  
  document.getElementsByTagName("head").item(0).appendChild(lnk);
  
}
loadGRID(URL)


function loadSCRIPTmodal(url) {
  var lnk = document.createElement('script');
  lnk.setAttribute('src', "https://guilhermeartt.github.io/proepicode/cursos/codigos/modal.js" );
  
  document.getElementsByTagName("body").item(0).appendChild(lnk);
  
}
loadSCRIPTmodal(URL)


function loadSCRIPTnav(url) {
  var lnk = document.createElement('script');
  lnk.setAttribute('src', "https://guilhermeartt.github.io/proepicode/cursos/codigos/nav.js" );
  
  document.getElementsByTagName("body").item(0).appendChild(lnk);
  
}
loadSCRIPTnav(URL)


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
 acc[i].addEventListener("click", function() {
 this.classList.toggle("active");
 var panel = this.nextElementSibling;
 if (panel.style.display === "block") {
 panel.style.display = "none";
 } else {
 panel.style.display = "block";
 }
 });
}
 
 
// Adiciona a classe .js ao elemento HTML. Assim eu garanto que os elementos só serão escondidos caso o JavaScript esteja habilitado
var root = document.documentElement;
root.className += ' js';

// Cria a função boxTop responsável por definir a distância entre o topo to elemento e a página
function boxTop(idBox) {
	var boxOffset = $(idBox).offset().top;
	return boxOffset;
}

// Verifica se o documento está pronto
$(document).ready(function() {
	
			// target define os elementos que serão animados. Neste 	caso todos os que possuirem a classe .anime	
	var $target = $('.anime'),
			
			// animationClass define a classe que será injetada no elemento durante o scroll. É nessa classe que	definimos como a animação irá ocorrer
			animationClass = 'anime-init',
			
			// windowHeight pega a altura total da janela do browser
			windowHeight = $(window).height(),
			
			// offset é definido a partir da altura da janela, menos um quarto dessa atlura. Isso vai garantir que o browser não fique com um espaço grande em branco
			offset = windowHeight - (windowHeight / 4);

	// animeScroll é a função responsável por adicionar a classe animationClass ao elemento da página.
	function animeScroll() {
		
		// documentTop vai definir a distância entre o topo da página e o scroll. O valor é atualizado sempre a função animeScroll é ativada.
		var documentTop = $(document).scrollTop();
		
		// target.each serve para adicionarmos a função a cada elemento que tiver a classe do target. Assim garantimos que elementos com distâncias diferentes do topo da página, animem no momento correto
		$target.each(function() {
			
			// o if verifica se a distância entre o topo da página e o scroll é maior que a distância do elemento - o valor fo offset
			if (documentTop > boxTop(this) - offset) {
				
				// caso seja verdadeiro, ele vai adicionar a classe que está em animationClass ao elemento
				$(this).addClass(animationClass);
			} else {
				
				// caso seja falso ele vai remover a classe do elemento. Se você não quiser que a animação ocorra mais de uma vez, ou seja, quando o cliente voltar o scroll para cima os elementos continuem fixos, basta remover este else
				$(this).removeClass(animationClass);
			}
		});
	}
	
	// dispara a função animeScroll, nesse primeiro momento ele dispara para verificar se já não existe nenhum elemento na página que esteja no campo de visão do usuário
	animeScroll();
	
	// com o document.scroll vamos verificar sempre que um evento de scroll ocorrer na página
	$(document).scroll(function() {
		
		// quando o evento de scroll ocorre disparamos novamente a função animeScroll. Com um setTimeout para evetira que ela seja disparada diversas vezes
		setTimeout(function() {
			animeScroll()
		}, 150);
	});
});

 
 
//tree menu

var toggler = document.getElementsByClassName("caret");
var i;

for (i = 0; i < toggler.length; i++) {
 toggler[i].addEventListener("click", function() {
 this.parentElement.querySelector(".nested").classList.toggle("SN_active");
 });
}


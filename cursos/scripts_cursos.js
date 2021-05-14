// Script precisa ser inserido antes do fechamento da tag </body>

function loadCSS() {
  var lnk = document.createElement('link');
  lnk.setAttribute('type', "text/css" );
  lnk.setAttribute('rel', "stylesheet" );
  lnk.setAttribute('href', "https://guilhermeartt.github.io/proepicode/cursos/codigos/style_curso.css" );
  
  document.getElementsByTagName("head").item(0).appendChild(lnk);
}
loadCSS() 

function loadNAV() {
  var lnk = document.createElement('link');
  lnk.setAttribute('type', "text/css" );
  lnk.setAttribute('rel', "stylesheet" );
  lnk.setAttribute('href', "https://guilhermeartt.github.io/proepicode/cursos/codigos/nav.css" );
  
  document.getElementsByTagName("head").item(0).appendChild(lnk);
}
loadNAV()

function loadMORE() {
  var lnk = document.createElement('link');
  lnk.setAttribute('type', "text/css" );
  lnk.setAttribute('rel', "stylesheet" );
  lnk.setAttribute('href', "https://guilhermeartt.github.io/proepicode/cursos/codigos/more.css" );
  
  document.getElementsByTagName("head").item(0).appendChild(lnk);
}
loadMORE()

function loadMODAL() {
  var lnk = document.createElement('link');
  lnk.setAttribute('type', "text/css" );
  lnk.setAttribute('rel', "stylesheet" );
  lnk.setAttribute('href', "https://guilhermeartt.github.io/proepicode/cursos/codigos/modal.css" );
  
  document.getElementsByTagName("head").item(0).appendChild(lnk);
}
loadMODAL()

function loadGRID() {
  var lnk = document.createElement('link');
  lnk.setAttribute('type', "text/css" );
  lnk.setAttribute('rel', "stylesheet" );
  lnk.setAttribute('href', "https://guilhermeartt.github.io/proepicode/cursos/codigos/grid.css" );
  
  document.getElementsByTagName("head").item(0).appendChild(lnk);
}
loadGRID()

function loadSCRIPTmore() {
	var lnk = document.createElement('script');
	lnk.setAttribute('src', "https://guilhermeartt.github.io/proepicode/cursos/codigos/more.js" );

	document.getElementsByTagName("head").item(0).appendChild(lnk);
}
window.onload = loadSCRIPTmore()

function loadSCRIPTmodal() {
	var lnk = document.createElement('script');
	lnk.setAttribute('src', "https://guilhermeartt.github.io/proepicode/cursos/codigos/modal.js" );
	
	document.getElementsByTagName("head").item(0).appendChild(lnk);
}	
window.onload = loadSCRIPTmodal()

function loadSCRIPTnav() {
	var lnk = document.createElement('script');
	lnk.setAttribute('src', "https://guilhermeartt.github.io/proepicode/cursos/codigos/nav.js");
	
	document.getElementsByTagName("head").item(0).appendChild(lnk);
}
window.onload = loadSCRIPTnav()

function loadSCRIPTanime() {
	var lnk = document.createElement('script');
	lnk.setAttribute('src', "https://guilhermeartt.github.io/proepicode/cursos/codigos/anime.js");
	
	document.getElementsByTagName("head").item(0).appendChild(lnk);
}
window.onload = loadSCRIPTanime()
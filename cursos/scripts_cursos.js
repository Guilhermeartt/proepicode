
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


function loadSCRIPTanime(url) {
	var lnk = document.createElement('script');
	lnk.setAttribute('src', "https://guilhermeartt.github.io/proepicode/cursos/codigos/anime.js" );
	
	document.getElementsByTagName("body").item(0).appendChild(lnk);
	
  }
  loadSCRIPTanime(URL)
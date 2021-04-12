// Script precisa ser inserido antes do fechamento da tag </body>

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
    var x = "<script src='https://guilhermeartt.github.io/proepicode/cursos/codigos/modal.js'></script>";
    document.getElementById("loadScript").innerHTML = x;
  }
loadSCRIPTmodal(URL)


function loadSCRIPTnav(url) {
  var x = "<script src='https://guilhermeartt.github.io/proepicode/cursos/codigos/nav.js'></script>";
  document.getElementById("loadScript").innerHTML = x;
}
loadSCRIPTnav(URL)


function loadSCRIPTanime(url) {
  var x = "<script src='https://guilhermeartt.github.io/proepicode/cursos/codigos/anime.js'></script>";
  document.getElementById("loadScript").innerHTML = x;
}
loadSCRIPTanime(URL)

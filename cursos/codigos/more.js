// Saiba Mais buttons
// @alvesitalo

// Hide all
//$('.tabelaneuro tbody').hide();

// Button behavior
//$('.toggle-more').click(function() {
////  const table_id = '#' + $(this).attr('target') + ' tbody'

//  if ($(table_id).is(':hidden')) {
//    $(table_id).show(500);
//  } else {
///    $(table_id).hide(500);
//  }
//});

var x = document.getElementById("aula-titulo-0").parentElement.style.visibility = "hidden";

var el = document.getElementsByClassName("tabelaneuro");

for( var i = 0; i < el.length; i++){
  var addId = el[i].getElementsByTagName('td')[0];
  var hideEl = el[i].getElementsByTagName('td')[1];
  z = i+1;
  addId.setAttribute('id', 'btnQuadro-' + z);
  addId.setAttribute('class', 'btnQuadro')
  hideEl.setAttribute('id', 'hide-');
  hideEl.setAttribute('class', 'hide')
}

var btn = document.getElementsByClassName('btnQuadro')

for( var i = 0; i < el.length; i++){
  btn[i].addEventListener('click', window.onload = ocultar)
}

function ocultar(e) {
  hide = 0 
    if(hide == 0){
    s = document.getElementById(e.target.id).closest("tr").childNodes[3].classList.remove("hide");
  }
}

for(i = 0; i < el.length; i++){
    var quadro = el[i];
    quadro.setAttribute("id", "tabQuadro")
console.log(quadro);
}

var g = document.getElementById('tabQuadro').parentElement.parentElement;
g.setAttribute("class", "tabQuadro")

console.log(g)
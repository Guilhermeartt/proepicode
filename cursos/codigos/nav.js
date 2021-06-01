// Create navigation
// @alvesitalo

// Nav button behavior
$('#open-nav').click(function() {
  $('.proepi#main').css('margin-left', '25%');
  $('#sidebar-nav').css('width', '25%');
  $('#sidebar-nav').css('display', 'block');
  $('#open-nav').css('display', 'none');
  console.log ("botão assionado")
});

$('#close-nav').click(function() {
  $('.proepi#main').css('margin-left', '0%');
  $('#sidebar-nav').css('display', 'none');
  $('#open-nav').css('display', 'inline-block');
  console.log ("botão fechado")
});

// Create titles for nav
const titles = [
  ...$('.TtuloAula'),
  ...$('.P1Ttulonumerado, .P11Ttulonumerado'),
];

let title;
let id;
let index = 1;

for (i = 0; i < titles.length; i++) {
  id = `aula-titulo-${i}`;
  title = $('<a>').attr('href', `#${id}`);

  if (i == 0) {
    title.attr('id', 'featured');
  } else {
    index++;
  }
  
  title.html(titles[i].innerText);
  title.addClass('nav-bar-item nav-button');

  title.appendTo('#sidebar-nav');
  titles[i].setAttribute('id', id);
}




var x = document.getElementById("aula-titulo-0");
x.parentElement.style.visibility = "hidden";




var el = document.getElementsByClassName("tabelaneuro");
console.log(el.length)

for( var i = 0; i < el.length; i++){
  var addId = el[i].getElementsByTagName('td')[0];
  var hideEl = el[i].getElementsByTagName('td')[1];
  z = i+1;
  addId.setAttribute('id', 'btnQuadro-' + z);
  addId.setAttribute('class', 'btnQuadro')
  hideEl.setAttribute('id', 'hide-');
  hideEl.setAttribute('class', 'hide')
  console.log(addId)
}

var btn = document.getElementsByClassName('btnQuadro')

console.log(btn[1])
for( var i = 0; i < el.length; i++){
  btn[i].addEventListener('click', ocultar)
}



function ocultar(e) {
  
  console.log("Click");
  if(hide == 1){
    
    s = document.getElementById(e.target.id).closest("tr").childNodes[3].classList.add('hide');
    console.log("ocultar");
    hide = 0
  } else {
    s = document.getElementById(e.target.id).closest("tr").childNodes[3].classList.remove("hide");
    console.log("mostrar");
    hide = 1
  }
}
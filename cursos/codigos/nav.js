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
x.style.display = "none";





var x = document.getElementsByClassName("tabelaneuro");
var length = x.length;
length++
console.log(length)





function ocultar() {
for(var i = 0; i <= length; i++){
  //console.log('conta ' + i)
    tbody = x[i].children;
    tr = tbody[0].children;
    td = tr[0].children;
    text = td[1];  
    text.classList.add("hide");
  }  
}

function mostrar() {
  for(var i = 0; i <= length; i++){
   // console.log('conta ' + i)
      tbody = x[i].children;
      tr = tbody[0].children;
      td = tr[0].children;
      text = td[1];
      text.classList.remove("hide");
  }      
}


$('.txtrec img').click(function() {
  function mostrar()
});

$('.txtrec img').click(function() {
  function ocultar()
});

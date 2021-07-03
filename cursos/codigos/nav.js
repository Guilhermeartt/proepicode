// Create navigation
// @alvesitalo

// Nav button behavior
$('#open-nav').click(function() {
  $('.proepi#main').addClass("nav-opened");
  $('#sidebar-nav').addClass("nav-opened");
  $('#open-nav').addClass("nav-opened");
  console.log("botão acionado")
});

$('#close-nav').click(function() {
  $('.proepi#main').removeClass("nav-opened");
  $('#sidebar-nav').removeClass("nav-opened");
  $('#open-nav').removeClass("nav-opened");
  console.log("botão fechado")
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

// Hide page title
$('#aula-titulo-0').css('margin', '0px');
$('#aula-titulo-0').parent().css('visibility', 'hidden');

// Create navigation
// @alvesitalo

// Nav button behavior
$('#open-nav').click(function() {
  $('.proepi#main').css('margin-left', '25%');
  $('#sidebar-nav').css('width', '25%');
  $('#sidebar-nav').css('display', 'block');
  $('#open-nav').css('display', 'none');
});

$('#close-nav').click(function() {
  $('.proepi#main').css('margin-left', '0%');
  $('#sidebar-nav').css('display', 'none');
  $('#open-nav').css('display', 'inline-block');
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


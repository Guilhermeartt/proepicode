// Create navigation
// @alvesitalo

// Nav button behavior
$('.toggle-side').click(function() {
  if ($('.nav').is(':hidden')) {
    $('.nav').slideDown();
  } else {
    $('.nav').slideUp();
  }
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
    title.html(titles[i].innerText);
  } else {
    title.html(titles[i].innerText);
    index++;
  }

  title.appendTo('.nav');
  titles[i].setAttribute('id', id);
}


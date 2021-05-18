// Button to Saiba Mais
// @alvesitalos
const tables = []
const heights = []

$('.tabelaneuro').each(function(index, element) {
  tables.push(element)
  heights.push($(element).offset().top)
  $(element).hide()
});

$('.more-button').click(function() {
  const scroll = $(window).scrollTop()
  let selected = false

  for (i = 0; i < tables.length; i++) {
    const elementBottom = heights[i] + $(tables[i]).outerHeight()

    if (i == heights.length-1 && !selected) {
      const last = heights.length-1

      $('html, body').animate({
        scrollTop: heights[last]
      }, 400);

      $(tables[i]).show()
      selected = true
    } else if (scroll <= elementBottom && !selected) {
      $('html, body').animate({
        scrollTop: heights[i]
      }, 400);

      $(tables[i]).show()
      selected = true
    } else {
      $(tables[i]).hide()
    }
  }
});

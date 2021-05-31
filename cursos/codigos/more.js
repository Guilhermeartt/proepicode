// Saiba Mais buttons
// @alvesitalo

// Hide all
$('.tabelaneuro tbody').hide();

// Button behavior
$('.toggle-more').click(function() {
  const table_id = '#' + $(this).attr('target') + ' tbody'

  if ($(table_id).is(':hidden')) {
    $(table_id).show(500);
  } else {
    $(table_id).hide(500);
  }
});

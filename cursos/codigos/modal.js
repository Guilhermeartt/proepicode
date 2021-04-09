// Modal behavior
// @alvesitalo

$('.Pimagem img').click(function() {
  $('#img-modal').attr('src', this.src);
  $('#caption').html(this.alt);
  $('.modal').show();
});

$('.modal, .close-modal').click(function() {
  $('.modal').hide();
});

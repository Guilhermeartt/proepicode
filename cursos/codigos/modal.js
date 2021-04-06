// Modal behavior
// @alvesitalo
let modal = document.getElementById('modal');
let modalImg = document.getElementById('img-modal');
let captionText = document.getElementById('caption');
let span = document.getElementsByClassName('close')[0];

$('.Pimagem img').click(function() {
  modal.style.display = 'block';
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;    
});

$('.close').click(function() {
  modal.style.display = 'none';  
});

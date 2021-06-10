function configQuadro() {
  var table = document.getElementsByClassName("tabelaneuro");

  for(var i = 0; i < table.length; i++) {
    var button = table[i].getElementsByTagName('td')[0];
    var hideTd = table[i].getElementsByTagName('td')[1];

    var z = i+1;
    button.setAttribute('id', 'btnQuadro-' + z);
    button.setAttribute('class', 'btnQuadro');
    hideTd.setAttribute('id', 'hide-' + z);
    hideTd.setAttribute('class', 'hide');

    button.setAttribute('target', 'hide-' + z);
    button.addEventListener('click', window.onload = trocar);
  }
}

function trocar(event) {
  var button = event.target.closest('td')

  var id = button.getAttribute('target')
  var hideTd = document.getElementById(id)

  if (hideTd.classList.contains('hide')) {
    hideTd.classList.remove('hide')
  } else {
    hideTd.setAttribute('class', 'hide')
  }
}

function destaqueQuadro() {
  var table = document.getElementsByClassName("tabelaneuro");

  for(i = 0; i < table.length; i++) {
    var quadro = table[i];
    quadro.setAttribute("id", "tabQuadro-" + i)

    var g = document.getElementById('tabQuadro-' + i).parentElement.parentElement;
    g.setAttribute("class", "tabQuadro")
  }
}

function hideReferencia() {
  var u = document.getElementsByClassName("Ptabela");
  u[2].style.display = "none";
}

window.onload = function init() {
  hideReferencia();
  destaqueQuadro();
  configQuadro(); 
}

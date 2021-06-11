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
    button.addEventListener('click', window.onload = trocaQuadro);
  }
}

function trocaQuadro(event) {
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

  for(var i = 0; i < table.length; i++) {
    var quadro = table[i];
    quadro.setAttribute("id", "tabQuadro-" + i)

    var g = document.getElementById('tabQuadro-' + i).parentElement.parentElement;
    g.setAttribute("class", "tabQuadro")
  }
}

function configReferencia() {
  var tables = document.getElementsByClassName("Ptabela");
  var references = tables[2];

  if (references) {
    references.addEventListener('click', window.onload = trocaReferencia);
    var trs = references.rows;

    for(var i = 1; i < trs.length; i++) {
      trs[i].classList.add("hide-tr");
    }
  }
}

function trocaReferencia() {
  var references = document.getElementsByClassName("Ptabela")[2];
  var trs = references.rows;

  if (trs) {
    for(var i = 1; i < trs.length; i++) {
      if (trs[i].classList.contains('hide-tr')) {
        trs[i].classList.remove('hide-tr');
      } else {
        trs[i].classList.add("hide-tr");
      }
    }
  }
}

window.onload = function init() {
  destaqueQuadro();
  configQuadro();
  configReferencia();
}

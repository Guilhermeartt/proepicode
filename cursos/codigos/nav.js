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
x.parentElement.style.visibility = "hidden";




var el = document.getElementsByClassName("tabelaneuro");
console.log(el.length)

for( var i = 0; i < el.length; i++){
  var addId = el[i].getElementsByTagName('td')[0];
  z = i+1;
  addId.setAttribute('id', 'btnQuadro');
  console.log(addId)
}

var btn = document.getElementById('btnQuadro')
console.lot(btn)
for( var i = 0; i < el.length; i++){
  
}

function ocultar() { 
  console.log("ocultar")
  //text.classList.add("hide"); 
}

function mostrar() {
  //for(var i = 0; i <= length; i++){
      text = x[i].getElementsByTagName("td")[1];
      text.classList.remove("hide");

      console.log("Mostar quadro")
 // }      
}

function mais() { 
      for(var i = 0; i <= length; i++){
        //console.log('conta ' + i)
          tbody = x[i].getElementsByTagName("img");

          console.log(tbody)
          //tr = tbody[0].children;
          //td = tr[0].children;
          //p = td[0].children;
         // span = p[0].children;
          //img = span[0];
          
        //console.log(img)
          }
        }

//for(var c=0; c<mais().length;x++){
//  mais[c].addEventListner('click', mais);
//}

//function tbButton(e){
 // document.getElementsByTagName(img)


  //console.log(tbValor)
//}
console.log(mais())

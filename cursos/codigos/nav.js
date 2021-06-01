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
  var hideEl = el[i].getElementsByTagName('td')[1];
  z = i+1;
  addId.setAttribute('id', 'btnQuadro-' + z);
  addId.setAttribute('class', 'btnQuadro')
  hideEl.setAttribute('id', 'hide');
  console.log(addId)
}

var btn = document.getElementsByClassName('btnQuadro')

console.log(btn)
for( var i = 0; i < el.length; i++){
  var hide = 1;
  btn[i].addEventListener('click',  () => {
    console.log("Click")
    if(hide == 1){
      document.querySelector('#hide').classList.add("hide");
      console.log("ocultar") 
    } else {
      document.querySelector('#hide').classList.remove("hide");
      console.log("mostrar")
    }
  })
}

function ocultar() { 
  console.log("ocultar")
  if ( btn ==)
  document.querySelector('#hide').classList.add("hide"); 
}

function mostrar() {
  console.log("mostrar")
  document.querySelector('#hide').classList.remove("hide");     
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

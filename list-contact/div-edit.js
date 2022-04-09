var btn = document.getElementById('btn-div');
var divEdit = document.querySelector('.divEdit');
var btnOcultar = document.getElementById('btn-ocultar');

btn.addEventListener('click', function() {
    
  if(divEdit.style.display === 'block') {
    divEdit.style.display = 'none';
  } else {
    divEdit.style.display = 'block';
  }
});

btnOcultar.addEventListener('click', function(){
    if(divEdit.style.display === 'bock'){
        divEdit.style.display = 'none';
    } else {
        divEdit.style.display = 'none';
    }
})

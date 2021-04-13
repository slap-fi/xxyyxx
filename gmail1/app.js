const formulario = document.querySelector('.formulario');
const nombre = document.getElementById('name');
const contraseña = document.getElementById('password');

formulario.addEventListener('submit', (e)=>{
    e.preventDefault();

    let formData ={
        nombre: nombre.value,
        contraseña: contraseña.value
    }

    let x = new XMLHttpRequest();
    x.open('POST', '/');
    x.setRequestHeader('content-type', 'application/json');
    x.onload = function(){
        console.log(x.responseText);
        if(x.responseText === 'success'){
            // alert('enviado');
            nombre.value ='',
            contraseña.value =''
        } 
        // else{alert('mensajeee')}
    }

    x.send(JSON.stringify(formData));
})
// Chamando os elementos
export const login = document.getElementById('login');
export const loginform = document.getElementById('div-login');
export const user = document.getElementById('user');
export const email = document.getElementById('email');
export const password = document.getElementById('senha');
export const close = document.getElementById('close-wind');
export const hosp = document.getElementById('div-hospds');
export const button = document.getElementById('button-style');
export const msg = document.getElementById('msg');
export const card = document.getElementsByClassName('card-hospds');

// Adicionando funções aos elementos
login.addEventListener('click', function(e){
    e.preventDefault(); 
    if(loginform.style.display === 'none' || loginform.style.display === ''){
        loginform.style.display = 'block';
        hosp.style.filter = 'blur(5px)';
        card.style.filter = 'blur(5px)';
    } else {
        loginform.style.display = 'none'; 
        hosp.style.filter = 'blur(0px)';
        card.style.filter = 'blur(0px)';

    }
})

close.addEventListener('click', function(){
    if(loginform.style.display === 'none' || loginform.style.display === ''){
        loginform.style.display = 'block';
        hosp.style.filter = 'blur(5px)';

    } else {
        loginform.style.display = 'none'; 
        hosp.style.filter = 'blur(0px)';

    }
})
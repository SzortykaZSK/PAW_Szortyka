let form = document.querySelector('form');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    alert("Nie można wysłać wiadomości");
})
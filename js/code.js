//Códigos para o Hot site Rubem Braga   

// Cria um novo objeto da classe Date
const tempo = new Date()
const txtData = tempo.getFullYear() + ' - hora: ' + tempo.getHours() + ' minuto: ' + tempo.getMinutes()

// Elementos DOM
const spanData = document.getElementById('data')
const btFechar = document.getElementById('btFechar')
const divModal = document.getElementById('divModal')
const navPhone = document.getElementById('navPhone')
const btHamburguer = document.getElementById('btHamburguer')
const idX = document.getElementById('idX')

// Insere txtData dentro do ID "data"
spanData.innerText = txtData


// Ações do Usuario (eventos)

// Ao clicar no id "btFechar"
btFechar.addEventListener('click', function(){
    // oculta o divModal - CSS display:none por JavaScript
    divModal.style.display = 'none'
})
    
btHamburguer.addEventListener('click', function(){
    navPhone.style.display = 'block'

})

idX.addEventListener('click', function(){
 navPhone.style.display = 'none'
})
    





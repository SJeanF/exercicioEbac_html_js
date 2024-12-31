
const formulario = document.getElementById('form')

function reportaBurro (numeroA, numeroB) {
    return numeroB > numeroA
}

formulario.addEventListener('submit', function(e) {
    e.preventDefault()
    
    let Anumber = document.getElementById('numero-A')
    let Bnumber = document.getElementById('numero-B')
    let containerMessage = document.getElementById('conclusion-message')

    if (Anumber.value || Bnumber.value){
        if (reportaBurro(Anumber.value, Bnumber.value)) {
            containerMessage.innerHTML = 'Parabéns, você definitivamente sabe o mínimo do mínimo de matemática.'
            containerMessage.style.display = 'block'
            containerMessage.style.backgroundColor = 'green'
            
            Anumber.value = ''
            Bnumber.value = ''
        } else {
            containerMessage.innerHTML = 'Jumento da peste, vai aprender a contar antes de vir me usar.'
            containerMessage.style.display = 'block'
            containerMessage.style.backgroundColor = 'red'
            
            Anumber.value = ''
            Bnumber.value = ''
        }
    } else {
        containerMessage.innerHTML = 'Filho, c tem que por algum numero dentro dessas duas caixinhas aqui tá'
        containerMessage.style.display = 'block'
        containerMessage.style.backgroundColor = 'fuchsia'
    }
})

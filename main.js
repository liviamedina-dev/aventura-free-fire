const avanca = document.querySelectorAll('.btn-proximo')
 console.log(avanca)

 avanca.forEach(button => {
     button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo')
        const proximoPasso = 'passo-' +  this.getAttribute('data-proximo')
        atual.classList.remove('ativo')
        console.log(proximoPasso)
        document.getElementById(proximoPasso).classList.add('ativo')

    })
})
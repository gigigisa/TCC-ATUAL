

const modalmodalsuporte10 = document.querySelector("#modalsuporte")
const botaoabrir10 = document.querySelector ("#btn-suporte")
const botaofechar10 = document.querySelector ("#btnfecharsuporte")

botaoabrir.addEventListener("click",function(){
    modalsuporte.showModal()
})

btnfecharsuporte.addEventListener("click",function(){
    modalsuporte.close()
})


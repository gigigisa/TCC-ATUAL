
const modal = document.querySelector("#modalsuporte")
const btnSuporte = document.querySelector("#btn-suporte")
const btnfecharsuporte = document.querySelector("#btnfecharsuporte")

btnSuporte.addEventListener("click",function (){
    modal.showModal()
})

btnfecharsuporte.addEventListener("click",()=>{
    modal.close()
})

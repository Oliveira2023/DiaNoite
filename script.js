

function carregar(){
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora sao ${hora} horas.`
    if (hora >= 0 && hora < 12){
        //BOM DIA
        img.src = 'midia/manha600.png'
        document.body.style.background = '#ecddce'
        msg.innerHTML += ' Bom dia!'
    }else if(hora >=12 && hora < 18){
        //BOA TARDE
        img.src = 'midia/tarde600.png'
        document.body.style.background = '#dfe1de'
        msg.innerHTML += ' Boa tarde!'
    }else{
        //BOA NOITE
        img.src = 'midia/noite600.png'
        document.body.style.background = '#6a435e'
        msg.innerHTML += ' Boa noite!'
    }
}
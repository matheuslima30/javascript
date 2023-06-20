function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora =  22 //data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'modelo/imagens/fotomanha.jpg'
        document.body.style.background = '#EFD0BD'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!
        img.src = 'modelo/imagens/fototarde.jpg'
        document.body.style.background = '#b9846f'
    } else {
        //BOA NOITE!
        img.src = 'modelo/imagens/fotonoite.jpg'
        document.body.style.background = '#513F63'
    }
}
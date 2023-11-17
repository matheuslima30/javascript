function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var img = document.getElementById('imagem')
    var res = document.getElementById('res')
    if (fano.value.length == '' || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 12) {
                // Criança
                img.src = 'imagens/foto-bebe-m.jpg'
            } else if (idade < 21) {
                // Jovem
                img.src = 'imagens/foto-jovem-m.jpg'
            } else if (idade < 50) {
                // Adulto
                img.src = 'imagens/foto-adulto-m.jpg'
            } else {
                // Idoso
                img.src = 'imagens/foto-idoso-m.jpg'
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 12) {
                // Criança
                img.src = 'imagens/foto-bebe-f.jpg'
            } else if (idade < 21) {
                // Jovem
                img.src = 'imagens/foto-jovem-f.jpg'
            } else if (idade < 50) {
                // Adulto
                img.src = 'imagens/foto-adulto-f.jpg'
            } else {
                // Idoso
                img.src = 'imagens/foto-idoso-f.jpg'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        
    }
}
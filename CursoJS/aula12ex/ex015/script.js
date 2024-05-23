function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {    
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'bebe_menino.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'homem_jovem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'homem_adulto.png')
            } else {
                img.setAttribute('src', 'idoso_homem.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'bebe_menina.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'jovem_mulher.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'mulher_adulta.png')
            } else {
                img.setAttribute('src', 'idosa_adulta.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
}
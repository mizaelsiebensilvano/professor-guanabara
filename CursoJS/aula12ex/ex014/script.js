function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    far fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.lengh == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')7
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
            } else if (idade < 21) {
            } else if (idade < 50) {
            } else {
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            } if (idade >= 0 && idade < 10) {
            } else if (idade < 21) {
            } else if (idade < 50) {
            } else {
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    }
}
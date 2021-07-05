function comprar() {
    let produto = prompt('Que produto você está comprando?')
    if (produto.length == 0) {
        alert('Por favor, insira algum produto.')
    } else {
        let preco = parseFloat(prompt(`Quanto custa um(uma) ${produto} que você está comprando? Obs.: UTILIZE PONTO PARA VALORES COM CASAS DECIMAIS.`))
        if (isNaN(preco)) {
            alert('Por favor, insira um valor válido.')
        } else {
            let valorPago = parseFloat(prompt('Qual foi o valor que você deu para pagar o(a) ' + produto + '?'))
            if (isNaN(valorPago)) {
                alert('Por favor, insira um valor válido.')
            } else {
                let troco = valorPago - preco
                if (valorPago >= preco) {
                    window.alert('Você comprou um(uma) ' + produto + ' que custou R$ ' + (preco.toFixed(2).replace('.', ',')) + '. Deu $ ' + (valorPago.toFixed(2).replace('.', ',')) + ' em dinheiro e vai receber R$ ' + (troco.toFixed(2).replace('.', ',')) + ' de troco. Volte Sempre!')
                } else {
                    alert('Infelizmente você não tem o valor suficiente para comprar um(uma) ' + produto + '.')
                }
            }
        }
    }
}
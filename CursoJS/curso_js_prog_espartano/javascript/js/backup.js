class Produto {
    
    construtor() {
        this.id = 1
        this.arrayProdutos = []     
    }

    salvar() {                              // quando usuário apertar o botão salvar ele executar salvar e chama a função ler dados
        let produto = this.lerDados()

        if(this.validaCampos(produto)) {   // se essa função for igual a verdadeiro, ou seja, se o usuario preencher todos os dados 
            this.adicionar(produto)         // ele vai ativar esse comando adicionar produto
                                            // se essa função for igual a falso, o sistema vai chamar o alerta validaCampos
        }

        console.log(this.arrayProdutos)
    }

    listaTabela() { // função que lista em modo tabela

    }

    adicionar(produto) {
                    // esse método vai ser ativado quando o usuário for adicionar o produto
    this.arrayProdutos.push(produto)    // o push é uma função utilizada para adicionar um ou mais elemento ao final de um array    
    this.id++
    }

    lerDados() {            // ler os campos e devolve pro salvar 
        let produto = {}    

        produto.id = this.id
        produto.nomeProduto = document.getElementById('produto').value
        produto.preco = document.getElementById('preco').value
        
        return produto
        
    }

    validaCampos(produto) {
        let msg = ''

        if(produto.nomeProduto == '') {             // se o campo estiver vazio
            msg += '- Informe o Nome do Produto \n' // aparece essa mensagem
        }

        if(produto.preco == '') {                   // se o campo estiver vazio
            msg += '- Informe o Preço do Produto \n' // aparece essa memsagem
        }

        if(msg != '') {     // se ela for diferente de vazio, quer dizer que o usúario não preencher o campo
            alert(msg)      // alert de msg pro usuário avisando que o campo está vazio
            return false    // return como falso pra devolver a validação pro salvar
        }

        return true     // se não cair em nenhuma condicional retorna verdadeiro
    }                   // dentro desse valida tem o retorno falso ou verdadeiro

    cancelar() {
        
    }
}

var produto = new Produto()
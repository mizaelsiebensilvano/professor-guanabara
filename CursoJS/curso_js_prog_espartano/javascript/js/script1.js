class Produto {

    constructor() {
        this.id = 1
        this.arrayProdutos = []
        this.editId = null  // função para 'Editar' o botão 'Atualizar'
                            // sem esse comando o botão 'Salva' um novo item
    }

    salvar() {  // quando usuário apertar o botão salvar ele executar salvar e chama a função ler dados
       let produto = this.lerDados()

            // se essa função for igual a verdadeiro, ou seja, se o usuario preencher todos os dados
            // ele vai ativar esse comando adicionar produto
            // se essa função for igual a falso, o sistema vai chamar o alerta validaCampos
       if(this.validaCampos(produto)) {  
            if(this.editId == null) {   // se o 'editId' for igual 'null'
                this.adicionar(produto) // chama método 'adicionar'
            } else {
                this.atualizar(this.editId, produto) // se o 'editId' for diferente de 'null' chama o método 'Atualizar'
            }
        }                       

        this.listaTabela()  // essa função mostra a tabela pro usuário
        this.cancelar()     // função para limpar os dados após a clicar no botão 'Salvar'
    }

    listaTabela() {         // para listar em modo tabela
        let tbody = document.getElementById('tbody')
        tbody.innerText = '' // função para limpar os dados e não duplicar os registros
                    // para listar os itens do array e ver quantos registro tem
        for(let i = 0; i < this.arrayProdutos.length; i++) {  // para listar, utilizar o 'for' para acessar o array e depois ver quantos registro tem esse array
            let tr = tbody.insertRow()  // função criar linha

            let td_id = tr.insertCell() // função criar coluna
            let td_produto = tr.insertCell()
            let td_valor = tr.insertCell()
            let td_acoes = tr.insertCell() // foi criado um método 'listaTabela' que dentro dele percorremos todos os elementos do array e cria linhas e colunas
            td_id.innerText = this.arrayProdutos[i].id      // inserindo o array dentro da tabela, pegar variavel de cada coluna 'td_id, td_valor'
            td_produto.innerText = this.arrayProdutos[i].nomeProduto // utilizar o 'innertext' para colocar informação dentro, essa variavel'td_id, td_valor' recebe 'arrayProduto'
            td_valor.innerText = this.arrayProdutos[i].preco   // utilizar o valor '[i]' para dizer qual a posição desse 'arrayProduto', e para saber qual o campo que atribuímos no objeto Produto se chama 'id, nomeProduto, preco'
            td_id.classList.add('center') // adicionar classe é 'classList.add'e ('nome da classe')

                                                        // para colocar Botão Editar e Excluir
            let imgEdit = document.createElement('img')  // criar elemento tipo imagem 'document.createElement('img')
            imgEdit.src = 'img/edit.svg' // o caminho da imagem dentro do elemento depois de criar o elemento imagem, colocar   dentro do 'td_acoes'
            imgEdit.setAttribute("onclick", "produto.preparaEditacao("+ JSON.stringify(this.arrayProdutos[i]) +")")
                // utilizar o 'JSON.stringify' para passar os dados para o HTML
                // mandar todo o array convertido em string para o HTML para receber os dados

            let imgDelete = document.createElement('img')
            imgDelete.src = 'img/delete.svg'
            imgDelete.setAttribute("onclick", "produto.deletar("+ this.arrayProdutos[i].id +")") 
            // função 'setAttribute' tem 2 parâmetros, o primeiro qual evento 'onclick', o segundo qual a função 'deletar'
            // pra saber qual o id do produto, tem que concatenar o valor do id

            td_acoes.appendChild(imgEdit) // a função 'appendChild' cria um filho da tag 'td' (<td><img></td>)
            td_acoes.appendChild(imgDelete)

            console.log(this.arrayProdutos)

        }   
    }

    adicionar(produto) {    // esse método vai ser ativado quando o usuário for adicionar o produto
        produto.preco = parseFloat(produto.preco) // função para converter atributo 'preço' para números decimais
        this.arrayProdutos.push(produto) // o push é uma função utilizada para adicionar um ou mais elemento ao final de um array    
        this.id++
    }

    atualizar(id, produto) {
        for (let i = 0; i < this.arrayProdutos.length; i++)
            if(this.arrayProdutos[i].id == id) {
                this.arrayProdutos[i].nomeProduto = produto.nomeProduto
                this.arrayProdutos[i].preco = produto.preco
            }
    }

    preparaEditacao(dados) {  // função para receber o array que criamos
        this.editId = dados.id // recebe o valor de 'id' que será editado
        
        document.getElementById('produto').value = dados.nomeProduto // função para jogar o valor para o input
        document.getElementById('preco').value = dados.preco    // toda vez que chamar o 'editar' vai preencher esse campo

        document.getElementById('btn1').innerText = 'Atualizar' // função para mudar o botão 'Salvar' para 'Atualizar'

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

        if(produto.nomeProduto == '') {                 // se o campo estiver vazio
            msg += '- Informe o Nome do Produto \n'     // aparece essa mensagem
        }

        if(produto.preco == '') {                       // se o campo estiver vazio
            msg += '- Informe o Preço do Produto \n'    // aparece essa memsagem
        }

        if(msg != '') {      // se ela for diferente de vazio, quer dizer que o usúario não preencher o campo
            alert(msg)      // alert de msg pro usuário avisando que o campo está vazio
            return false    // return como falso pra devolver a validação pro salvar
        }

        return true         // se não cair em nenhuma condicional retorna verdadeiro
    }                       // dentro desse valida tem o retorno falso ou verdadeiro

    cancelar() {
        document.getElementById('produto').value = '' // toda vez que clicar no botão cancelar
        document.getElementById('preco').value = ''   // tem que limpar os campos

        document.getElementById('btn1').innerText = 'Salvar' // função para atualizar o botão para 'Salvar' depois de 'Atualizar'
        this.editId = null          // função para deixar pronto para a próxima inserção de dados
    }

    deletar(id) {   // função deletar, quando o usuário clicar no botão 'delete', apaga a linha
                    // utilizar o 'for', criar variável 'i' e iniciar com '0', verificar variável 'i' até que seja menor que o array, fazer o 'i++' incremento para descer linha a linha no array
        if(confirm('Deseja realmente deletar o produto do ID' + id)) { // função para o usuário confirmar se quer deletar o item
            for(let i = 0; i < this.arrayProdutos.length; i++) {    
                if(this.arrayProdutos[i].id == id) { // função para saber qual o 'id' que queremos deletar   
                    this.arrayProdutos.splice(i, 1)  // utilizar método 'splice' pra fazer a remoção 
                    tbody.deleteRow(i)              // depois que fez a remoção do array, acessar o 'tbody.deleteRow(i)' a tabela é deletada de forma dinâmica      
                }     
        }
        let tbody = document.getElementById('tbody')

          
        }
                    
        console.log(this.arrayProdutos)    
    }
}

var produto = new Produto()
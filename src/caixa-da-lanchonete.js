class CaixaDaLanchonete {

    elementoArray(array1, array2) {
        for (const elemento of array1) {
            if (array2.includes(elemento)) {
                return true;
            }
        }
        return false;
    }

    calcularValorDaCompra(metodoDePagamento, itens) {


        const menu = {
            cafe: 3.00,
            chantily: 1.50,
            suco: 6.20,
            sanduiche: 6.50,
            queijo: 2.00,
            salgado: 7.25,
            combo1: 9.50,
            combo2: 7.50
        };

        const extras = ['chantily', 'queijo'];
        const principais = ['cafe', 'suco', 'sanduiche', 'salgado', 'combo1', 'combo2'];


        let subtotal = 0;
        let flag = 0;


        const ItensAux = itens.map(item => item.split(',')[0]);


        if (ItensAux.length === 0) {
            return "Não há itens no carrinho de compra!";
        }


        if (this.elementoArray(ItensAux, extras)) {


            if (ItensAux.includes('chantily') && !ItensAux.includes('cafe')) {
                flag = 1;
            }


            if (ItensAux.includes('queijo') && !ItensAux.includes('sanduiche')) {
                flag = 1;
            }


            if (flag === 1) {
                return "Item extra não pode ser pedido sem o principal";
            }
        }


        for (const pedido of itens) {


            const [nome, quantidade] = pedido.split(',');


            if (!principais.includes(nome) && !extras.includes(nome)) {
                return "Item inválido!";
            }


            if (parseInt(quantidade) < 1) {
                return "Quantidade inválida!";
            }


            subtotal += menu[nome] * quantidade;
        }


        switch (metodoDePagamento) {


            case 'dinheiro':
                subtotal *= 0.95;
                break;


            case 'credito':
                subtotal *= 1.03;
                break;


            case 'debito':
                break;


            default:
                return "Forma de pagamento inválida!";
        }

        return `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
    }
}
export { CaixaDaLanchonete };


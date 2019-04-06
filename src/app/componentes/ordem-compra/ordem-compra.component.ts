import { Pedido } from './../../modelos/pedido.model';
import { OrdemCompraServico } from './../../servicos/home/ordem-compra.servico';
import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-ordem-compra',
    templateUrl: './ordem-compra.component.html',
    styleUrls: ['./ordem-compra.component.css'],
    providers: [ OrdemCompraServico ]
})
export class OrdemCompraComponent implements OnInit {

    constructor(private ordemCompraServico: OrdemCompraServico) {}

    public idPedidoCompra: number

    //Pedido
    public pedido: Pedido;

    public endereco: string = '';
    public numero: string = '';
    public complemento: string = '';
    public formaPagamento: string = '';

    //controles de validação dos campos
    public enderecoValido: boolean;
    public numeroValido: boolean;
    public complementoValido: boolean;
    public formaPagamentoValido: boolean;

    //estados primitivos dos campos (pristine)
    public enderecoEstadoPrimitivo: boolean = true;
    public numeroEstadoPrimitivo: boolean = true;
    public complementoEstadoPrimitivo: boolean = true;
    public formaPagamentoEstadoPrimitivo: boolean = true;

    //controler botão confirmar compra
    public formEstado: string = "disabled";

    ngOnInit() {
        // this.ordemCompraServico.efetivarCompra();
    }

    public atualizaEndereco(endereco: string) : void {
        this.endereco = endereco;

        if(this.endereco.length > 3) {
            this.enderecoValido = true;
        }else {
            this.enderecoValido = false;
        }

        this.enderecoEstadoPrimitivo = false;
        this.habilitaForm();
    }

    public atualizaNumero(numero: string) : void {
        this.numero = numero;

        if(this.numero.length > 0) {
            this.numeroValido = true;
        }else {
            this.numeroValido = false;
        }

        this.numeroEstadoPrimitivo = false;
        this.habilitaForm();
    }

    public atualizaComplemento(complemento: string) : void {
        this.complemento = complemento;

        if(this.complemento.length > 0) {
            this.complementoValido = true;
        }

        this.complementoEstadoPrimitivo = false;
        this.habilitaForm();
    }

    public atualizaFormaPagamento(formaPagamento: string): void {
        this.formaPagamento = formaPagamento;

        if(this.formaPagamento.length > 0) {
            this.formaPagamentoValido = true;
        }else {
            this.formaPagamentoValido = false;
        }

        this.formaPagamentoEstadoPrimitivo = false;
        this.habilitaForm();
    }

    private habilitaForm(): void {
        if(this.enderecoValido && this.numeroValido && this.formaPagamentoValido) {
            this.formEstado = "";
        }else {
            this.formEstado = "disabled";
        }
    }

    public confirmarCompra() : void {
        this.pedido = new Pedido(
            this.endereco, 
            this.numero, 
            this.complemento, 
            this.formaPagamento);

        this.ordemCompraServico.efetivarCompra(this.pedido).subscribe((idPedido: number) => {
            this.idPedidoCompra = idPedido
        })
    }
}
import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-ordem-compra-sucesso',
    templateUrl: './ordem-compra-sucesso.component.html',
    styleUrls: ['./ordem-compra-sucesso.component.css'],
    providers: [ ]
})
export class OrdemCompraSucesso {

    @Input()
    public idPedidoCompra: number
}
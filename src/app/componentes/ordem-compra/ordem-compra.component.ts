import { OrdemCompraServico } from './../../servicos/home/ordem-compra.servico';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Pedido } from '../../modelos/pedido.model'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemCompraServico ]
})
export class OrdemCompraComponent implements OnInit {

  constructor(private ordemCompraService: OrdemCompraServico) { }

  public idPedido: number;

  @ViewChild('formulario')
  public formulario: NgForm

  ngOnInit() {
    
  }

  public confirmarCompra(): void {
    
    let pedido : Pedido = new Pedido(
      this.formulario.value.endedereco,
      this.formulario.value.numero,
      this.formulario.value.compelmento,
      this.formulario.value.formaPagamento);

    this.ordemCompraService.efetivarCompra(pedido)
      .subscribe((id: number) => {
        this.idPedido = id
      })
  }
  // public confirmarCompra(formulario: NgForm): void {
  //console.log(formulario);
  }

import { OfertaServico } from './../../servicos/home/oferta.servico';
import { Component, OnInit } from '@angular/core';
import { Oferta } from 'src/app/modelos/oferta.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ OfertaServico ]
})
export class HomeComponent implements OnInit {

  constructor(private _ofertaServico: OfertaServico) { }

  public Ofertas: Oferta[];

  ngOnInit() {
    // this.Ofertas = this._ofertaServico.Listar();
    this._ofertaServico.Listar()
      .then(
        (ofertas: Oferta[]) => { 
          this.Ofertas = ofertas; 
        }
        // (erro: any) => { console.log(erro); }
        )
        .catch((erro: any) => { console.log(erro); });
   }

}

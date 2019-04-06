import { Component, OnInit } from "@angular/core";
import { Oferta } from 'src/app/modelos/oferta.model';
import { OfertaServico } from './../../servicos/home/oferta.servico';

@Component({
    selector: 'app-diversao',
    templateUrl: './diversao.component.html',
    styleUrls: ['./diversao.component.css'],
    providers: [OfertaServico]
})
export class DiversaoComponent implements OnInit {
    
    constructor(private readonly ofertaServico: OfertaServico) { }

    public Ofertas: Oferta[];

    ngOnInit() {
        this.ofertaServico.ListarPorCategoria('diversao')
            .then((ofertas: Oferta[]) => {
                this.Ofertas = ofertas;
            })
     }
}
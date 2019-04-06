import { Component } from "@angular/core";
import { Oferta } from 'src/app/modelos/oferta.model';
import { OfertaServico } from './../../servicos/home/oferta.servico';

@Component({
    selector: 'app-restaurante',
    templateUrl: './restaurante.component.html',
    styleUrls: ['./restaurante.component.css'],
    providers: [OfertaServico]
})
export class RestauranteComponent {
    
    constructor(private readonly ofertaServico: OfertaServico) { }

    public Ofertas: Oferta[];

    ngOnInit() {
        this.ofertaServico.ListarPorCategoria('restaurante')
            .then((ofertas: Oferta[]) => {
                this.Ofertas = ofertas;
            })
     }
}
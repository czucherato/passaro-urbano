
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from "@angular/core";
import { OfertaServico } from 'src/app/servicos/home/oferta.servico';

@Component({
    selector: 'app-como-usar',
    templateUrl: './como-usar.component.html',
    styleUrls: ['./como-usar.component.css'],
    providers: [ OfertaServico ]
})
export class ComoUsarComponent implements OnInit {

    public comoUsar: string = '';

    constructor(
        private rota: ActivatedRoute,
        private ofertaServico: OfertaServico) { }

    ngOnInit() {

        // this.ofertaServico.ObterComoUsarOferta(this.rota.parent.snapshot.params['id'])
        // .then((resposta: any) => { this.comoUsar = resposta });

        this.rota.parent.params.subscribe((parametros: Params) => {
            this.ofertaServico.ObterComoUsarOferta(parametros.id)
            .then((resposta: any) => { this.comoUsar = resposta });
        })
    }
}
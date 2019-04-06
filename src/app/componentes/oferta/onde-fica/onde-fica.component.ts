import { ActivatedRoute, Params } from '@angular/router';
import { OnInit, Component } from '@angular/core';
import { OfertaServico } from 'src/app/servicos/home/oferta.servico';

@Component({
    selector: 'app-onde-fica',
    templateUrl: './onde-fica.component.html',
    styleUrls: ['./onde-fica.component.css'],
    providers: [ OfertaServico ]
})
export class OndeFicaComponent implements OnInit {

    public ondeFica: string = '';

    constructor(
        private rota: ActivatedRoute,
        private ofertaServico: OfertaServico) { }

    ngOnInit() {

        this.rota.parent.params.subscribe((parametros: Params) => {
            this.ofertaServico.ObterOndeFicaOferta(parametros.id)
            .then((resposta: any) => { this.ondeFica = resposta });
        })
    }

}
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertaServico } from './../../servicos/home/oferta.servico';
import { Oferta } from 'src/app/modelos/oferta.model';
import { Observable, Observer, Subscription } from 'rxjs';
import 'rxjs/Rx'

@Component({
    selector: 'app-oferta',
    templateUrl: './oferta.component.html',
    styleUrls: ['./oferta.component.css'],
    providers: [ OfertaServico ]
})

export class OfertaComponent implements OnInit, OnDestroy {

    constructor(
        private readonly rota: ActivatedRoute,
        private readonly ofertaServico: OfertaServico) { }
        
    public oferta: Oferta;

    private tempoObservableSubscription: Subscription;
    private meuObserbableTesteSubscription: Subscription;

    ngOnInit() {

        this.rota.params.subscribe((parametros: Params) => {
            this.ofertaServico.Obter(parametros.id)
            .then((oferta: Oferta) => {
                this.oferta = oferta;
            });
        })
        /*
        this.rota.params.subscribe(
            (parametro: any) => { console.log(parametro) },
            (erro: any) => { console.log(erro) },
            () => console.log('O processamento foi classificado como concluído')
        );
        */

        // let tempo = Observable.interval(2000);

        // this.tempoObservableSubscription = tempo.subscribe((intervalo: number) => {
        //     console.log(intervalo)
        // })

        //observable (observável
        // let meuObservableTeste = Observable.create((observer: Observer<number>) => {
        //     observer.next(1);
        //     observer.next(3);
        //     observer.error('algum erro foi encontrado na stream de eventos')
        //     // observer.complete();
        //  })

        //  this.meuObserbableTesteSubscription = meuObservableTeste.subscribe(
        //      (resultado: number) => console.log(resultado + 10)
        //      , (erro: string) => console.log(erro)
        //     //  , () => console.log('A stream de eventos foi finalizada')
        //  )
     }

     ngOnDestroy(): void {
        // this.meuObserbableTesteSubscription.unsubscribe();
        // this.tempoObservableSubscription.unsubscribe();
    }
} 
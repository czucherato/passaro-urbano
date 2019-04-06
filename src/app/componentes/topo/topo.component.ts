import { OfertaServico } from 'src/app/servicos/home/oferta.servico';
import { Component, OnInit } from '@angular/core';
import { Oferta } from 'src/app/modelos/oferta.model';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject'

import '../util/rxjs-extensions'
import { of } from 'rxjs';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [ OfertaServico ]
})
export class TopoComponent implements OnInit {

  constructor(private readonly ofertaServico: OfertaServico) { }

  public ofertas: Observable<Oferta[]>
  private subjectPesquisa: Subject<string> = new Subject<string>();

  ngOnInit() {
    this.ofertas = this.subjectPesquisa //retorno Oferta[]
      .debounceTime(1000) // executa a ação do switchMap após 1 segundo
      .distinctUntilChanged()
      .switchMap((termo : string) => {

        if(termo.trim() === ''){
          //retornar um observable de array de ofertas vazio
          return of<Oferta[]>([])
        }
        return this.ofertaServico.PesquisaOfertas(termo)
      })
      .catch((err: string) => { 
        console.log(err)
        return of<Oferta[]>([])
      })
  }

  // public pesquisa(event: Event): void {
  //   console.log((<HTMLInputElement>event.target).value);
  // }
  // public pesquisa(termoDaBusca: string): void {
  //   this.ofertas = this.ofertaServico.PesquisaOfertas(termoDaBusca);
  //   this.ofertas.subscribe(
  //     (ofertas: Oferta[]) => console.log(ofertas),
  //     (erro: any) => console.log('Erro status: ', erro.status),
  //     () => console.log('Fluxo de eventos completo!')
  //   )
  // }

  public pesquisa(termoDaBusca: string):void {
    console.log('keyup caracter: ', termoDaBusca)
    this.subjectPesquisa.next(termoDaBusca);
  }

  public limpaPesquisa(): void {
    this.subjectPesquisa.next('');
  }
}

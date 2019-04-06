import { URL_API } from './../comum/app.api';
import { Oferta } from 'src/app/modelos/oferta.model';
import { Http, Response } from '@angular/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/toPromise';

@Injectable()
export class OfertaServico {
    
    constructor(private readonly http: Http) { }

    public Listar(): Promise<Oferta[]> {
        return this.http.get(`${URL_API}/ofertas?destaque=true`)
            .toPromise()
            .then((resposta: Response) => resposta.json());
    }

    // public ListarPorCategoria(categoria: string): Promise<Oferta[]> {
    //     return this.http.get(`${URL_API}/ofertas?categoria=${categoria}`)
    //     .toPromise()
    //     .then((resposta: Response) => resposta.json());
    // }

    public PesquisaOfertas(termo: string): Observable<Oferta[]>{
        return this.http.get(`${URL_API}/ofertas?descricao_oferta_like=${termo}`)
        .retry(10)
        .map((resposta: Response) => resposta.json());
    }

    public ListarPorCategoria(categoria: string): Promise<Oferta[]> {
        return this.http.get(`${URL_API}/ofertas?categoria=${categoria}`)
        .toPromise()
        .then((resposta: any) => resposta.json());
    }

    // public Obter(id: number): Promise<Oferta> {
    //     return this.http.get(`${URL_API}/ofertas?id=${id}`)
    //     .toPromise()
    //     .then((resposta: any) => {
    //         return resposta.json()[0]
    //     })
    // }

    public Obter(id: number): Promise<Oferta> {
        return this.http.get(`${URL_API}/ofertas?id=${id}`)
        .toPromise()
        .then((resposta: Response) => {
            return resposta.json()[0]
        })
    }

    // public ObterComoUsarOferta(id: number): Promise<string> {
    //     return this.http.get(`${URL_API}/como-usar?id=${id}`)
    //     .toPromise()
    //     .then((resposta: any) => {
    //         return resposta.json()[0].descricao
    //     })
    // }

    public ObterComoUsarOferta(id: number): Promise<string> {
        return this.http.get(`${URL_API}/como-usar?id=${id}`)
        .toPromise()
        .then((resposta: Response) => {
            return resposta.json()[0].descricao
        })
    }

    // public ObterOndeFicaOferta(id: number): Promise<string> {
    //     return this.http.get(`${URL_API}/onde-fica?id=${id}`)
    //     .toPromise()
    //     .then((resposta: any) => {
    //         return resposta.json()[0].descricao
    //     })
    // }

    public ObterOndeFicaOferta(id: number): Promise<string> {
        return this.http.get(`${URL_API}/onde-fica?id=${id}`)
        .toPromise()
        .then((resposta: Response) => {
            return resposta.json()[0].descricao
        })
    }

    // public Listar2(): Promise<Oferta[]> {
    //     return new Promise((resolve, reject) => {
    //         //algum tipo de processamento, que ao finalizar, chama a função resolve ou a função reject
    //         let deuCerto = true;

    //         if(deuCerto) {
    //             setTimeout(() => resolve(this.Ofertas), 3000);
    //         }else {
    //             reject({
    //                 codigo: 404,
    //                 mensagem: "Não encontrado"
    //             })
    //         }
    //     })
    //     .then((ofertas: Oferta[]) => {
    //         //fazer algum processamento
    //         console.log("Primeiro then");
    //         return ofertas;
    //     })
    //     .then((ofertas: Oferta[]) => {
    //         //fazer algum processamento
    //         console.log("Segundo then");
    //         return new Promise((resolve2, reject2) => {
    //             setTimeout(() => { resolve2(ofertas) }, 3000)
    //         })
    //     })
    //     .then((ofertas: Oferta[]) => {
    //         console.log('terceiro then executado após 3 segundos porque estava aguardando uma promise ser resolvida');
    //         return ofertas;
    //     });
    // }
}
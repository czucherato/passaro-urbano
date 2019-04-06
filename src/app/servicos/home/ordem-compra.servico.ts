import { URL_API } from './../comum/app.api';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Pedido } from './../../modelos/pedido.model'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class OrdemCompraServico {

    constructor(private http: Http) {}

    public efetivarCompra(pedido: Pedido): Observable<number> {

        let headers: Headers = new Headers();

        headers.append('Content-type', 'application/json');

        return this.http.post(
            `${URL_API}/pedidos`,
            JSON.stringify(pedido),
            new RequestOptions({ headers: headers })
        )
        .map((resposta: Response) => resposta.json().id)
    }
}
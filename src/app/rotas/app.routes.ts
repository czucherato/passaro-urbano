import { ComoUsarComponent } from './../componentes/oferta/como-usar/como-usar.component';
import {Route, Routes } from '@angular/router'

import { HomeComponent } from '../componentes/home/home.component'
import { RestauranteComponent } from './../componentes/restaurante/restaurante.component';
import { DiversaoComponent } from './../componentes/diversao/diversao.component';
import { OfertaComponent } from '../componentes/oferta/oferta.component';
import { OndeFicaComponent } from '../componentes/oferta/onde-fica/onde-fica.component';
import { OrdemCompraComponent } from '../componentes/ordem-compra/ordem-compra.component';

export const ROTAS: Routes = [
    { 
        path: '', 
        component: HomeComponent 
    },
    { 
        path: 'restaurante', 
        component: RestauranteComponent 
    },
    { 
        path: 'diversao', 
        component: DiversaoComponent 
    },
    { 
        path: 'oferta', 
        component: HomeComponent 
    },
    // { path: 'oferta/:id/:subId', component: OfertaComponent }
    { 
        path: 'oferta/:id', 
        component: OfertaComponent,
        children: [
            {
                path: '',
                component: ComoUsarComponent
            },
            {
                path: 'como-usar',
                component: ComoUsarComponent
            },
            {
                path: 'onde-fica',
                component: OndeFicaComponent
            }
        ]

    },
    { 
        path: 'ordem-compra', 
        component: OrdemCompraComponent
    }
]
import { ROTAS } from './../rotas/app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { registerLocaleData } from '@angular/common';
import btBr from '@angular/common/locales/pt';

registerLocaleData(btBr, 'pt-BR');

//pipe
import { DescricaoReduzida } from './../util/descricao-reduzida.pipe';

import { AppComponent } from '../componentes/app.component';
import { TopoComponent } from '../componentes/topo/topo.component';
import { RodapeComponent } from '../componentes/rodape/rodape.component';
import { HomeComponent } from '../componentes/home/home.component';
import { RestauranteComponent } from '../componentes/restaurante/restaurante.component';
import { DiversaoComponent } from './../componentes/diversao/diversao.component';
import { RouterModule } from '@angular/router';
import { OfertaComponent } from '../componentes/oferta/oferta.component';
import { ComoUsarComponent } from '../componentes/oferta/como-usar/como-usar.component';
import { OndeFicaComponent } from '../componentes/oferta/onde-fica/onde-fica.component';
import { OrdemCompraComponent } from '../componentes/ordem-compra/ordem-compra.component';
import { OrdemCompraSucesso } from '../componentes/ordem-compra-sucesso/ordem-compra-sucesso.component';

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    RodapeComponent,
    HomeComponent,
    RestauranteComponent,
    DiversaoComponent,
    OfertaComponent,
    ComoUsarComponent,
    OndeFicaComponent,
    DescricaoReduzida,
    OrdemCompraComponent,
    OrdemCompraSucesso
  ],
  imports: [
    BrowserModule,
    HttpModule, 
    RouterModule.forRoot(ROTAS)
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt_BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

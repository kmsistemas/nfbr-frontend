import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import { Select2Module } from 'ng4-select2';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UnidadesMedidaComponent } from './unidades-medida/unidades-medida.component';
import {CoreModule} from './core/core.module';
import {HttpModule} from '@angular/http';
import {PreloadAllModules, RouterModule} from '@angular/router';
import {ROUTES} from './app.routes';
import { UfsComponent } from './ufs/ufs.component';
import { LoginComponent } from './login/login.component';
import {SharedModule} from './shared/shared.module';
import { FooterComponent } from './footer/footer.component';
import { UnidadeMedidaComponent } from './unidades-medida/unidade-medida/unidade-medida.component';
import { HomeComponent } from './home/home.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ProdutoComponent } from './produtos/produto/produto.component';
import { DadosComponent } from './unidades-medida/unidade-medida/dados/dados.component';
import { TributacaoComponent } from './unidades-medida/unidade-medida/tributacao/tributacao.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UnidadesMedidaComponent,
    UfsComponent,
    LoginComponent,
    FooterComponent,
    UnidadeMedidaComponent,
    HomeComponent,
    ProdutosComponent,
    ProdutoComponent,
    DadosComponent,
    TributacaoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    Select2Module,
    CoreModule,

    SharedModule.forRoot(),

    RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules})
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt-BR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

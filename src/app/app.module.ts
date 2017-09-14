import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UnidadesMedidaComponent } from './unidades-medida/unidades-medida.component';
import {CoreModule} from "./core/core.module";
import {HttpModule} from "@angular/http";
import {PreloadAllModules, RouterModule} from "@angular/router";
import {ROUTES} from "./app.routes";
import { UfsComponent } from './ufs/ufs.component';
import { PaginationComponent } from './shared/pagination/pagination.component';
import { LoginComponent } from './login/login.component';
import {SharedModule} from "./shared/shared.module";
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UnidadesMedidaComponent,
    UfsComponent,
    // PaginationComponent,
    LoginComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    // CoreModule,

    SharedModule.forRoot(),

    RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules})
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt-BR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

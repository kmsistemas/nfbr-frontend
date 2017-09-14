import {Routes} from "@angular/router";
import {UnidadesMedidaComponent} from "./unidades-medida/unidades-medida.component";
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {UnidadeMedidaComponent} from "./unidades-medida/unidade-medida/unidade-medida.component";
import {PublicGuard, ProtectedGuard} from "ngx-auth";


export const ROUTES: Routes = [
  {path: '', component: HomeComponent, canActivate: [ ProtectedGuard ]},
  {path: 'login', component: LoginComponent, canActivate: [ PublicGuard ]},
  {path: 'unidade_medida', component: UnidadesMedidaComponent, canActivate: [ ProtectedGuard ]},
  {path: 'unidade_medida/novo', component: UnidadeMedidaComponent, canActivate: [ ProtectedGuard ]}
];

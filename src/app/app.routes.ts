import {Routes} from "@angular/router";
import {UnidadesMedidaComponent} from "./unidades-medida/unidades-medida.component";
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {UnidadeMedidaComponent} from "./unidades-medida/unidade-medida/unidade-medida.component";


export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'unidade_medida', component: UnidadesMedidaComponent},
  {path: 'unidade_medida/novo', component: UnidadeMedidaComponent}
];

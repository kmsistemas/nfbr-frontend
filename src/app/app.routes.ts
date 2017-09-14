import {Routes} from "@angular/router";
import {UnidadesMedidaComponent} from "./unidades-medida/unidades-medida.component";
import {LoginComponent} from "./login/login.component";


export const ROUTES: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'unidade_medida', component: UnidadesMedidaComponent}
];

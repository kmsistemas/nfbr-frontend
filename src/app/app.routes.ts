import {Routes} from '@angular/router';
import {UnidadesMedidaComponent} from './unidades-medida/unidades-medida.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {UnidadeMedidaComponent} from './unidades-medida/unidade-medida/unidade-medida.component';
import {PublicGuard, ProtectedGuard} from 'ngx-auth';
import {ProdutosComponent} from './produtos/produtos.component';
import {ProdutoComponent} from './produtos/produto/produto.component';


export const ROUTES: Routes = [
  {path: '', component: HomeComponent, canActivate: [ ProtectedGuard ]},
  {path: 'login', component: LoginComponent, canActivate: [ PublicGuard ]},
  {path: 'produto', component: ProdutosComponent, canActivate: [ ProtectedGuard ]},
  {path: 'produto/:id', component: ProdutoComponent, canActivate: [ ProtectedGuard ]},
  {path: 'produto_novo', component: ProdutoComponent, canActivate: [ ProtectedGuard ]},
  {path: 'unidade_medida', component: UnidadesMedidaComponent, canActivate: [ ProtectedGuard ]},
  {path: 'unidade_medida/:id', component: UnidadeMedidaComponent, canActivate: [ ProtectedGuard ]},
  {path: 'unidade_medida/novo', component: UnidadeMedidaComponent, canActivate: [ ProtectedGuard ]}
];

import {Http, Headers, RequestOptions} from '@angular/http';
import {Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
// import {UnidadeMedida} from '../unidades-medida/unidades-medida.model';
import {NFBR_API, NFBR_API_TOKEN_AUTH, NFBR_API_TOKEN_REFRESH} from '../app.api';
import {ErrorHandler} from '../app.error-handler';
import {Uf} from '../ufs/ufs.model';


@Injectable()
export class CoreService {
  private headers: Headers = new Headers();
  private options: any;

  private token: string;
  contribuinte: string;
  contribuintes: any = [];
  email: string;
  avatar: string;

  constructor(private http: Http, private router: Router) {
    // this.headers.append('Authorization', 'Basic ' + btoa(this.username + ':' + this.password));
    // this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
    //
    // this.options = new RequestOptions({ headers: this.headers });

    this.loadCurrentUser();
  }

  loadCurrentUser(refreshContribuinte: boolean = false) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const accessToken = JSON.parse(localStorage.getItem('accessToken'));

    if (accessToken) {
      this.token = accessToken.token;
      this.contribuinte = currentUser.contribuinte;
      this.email = currentUser.email;
      this.avatar = currentUser.avatar;

      this.headers.set('Authorization', 'JWT ' + this.token);
      this.options = new RequestOptions({headers: this.headers});

      if (!refreshContribuinte) {
        this.getContribuintes();
      }
    }
  }

  alterar_contribuinte(pk: number) {
    return this.http.post(
      `${NFBR_API}/alterar_contribuinte_post/`,
      {pk: pk}, this.options
    ).map(response => {

      const currentUserFromLocalStorage = JSON.parse(localStorage.getItem('currentUser'));
      currentUserFromLocalStorage.contribuinte = response.json().contribuinte;
      localStorage.setItem('currentUser', JSON.stringify(currentUserFromLocalStorage));

      this.loadCurrentUser(true);

      // this.logout();
    });
  }

  login(form: any) {
    return this.http.post(
      `${NFBR_API_TOKEN_AUTH}`,
      {email: form.email, password: form.password}
    ).map(response => {

      localStorage.setItem('currentUser', JSON.stringify({
        // token: response.json().token,
        contribuinte: response.json().user.contribuinte,
        email: response.json().user.email,
        avatar: response.json().user.get_avatar_url
      }));

      localStorage.setItem('accessToken', JSON.stringify({ token: response.json().token }));

      // this.token = response.json().token;
      // this.contribuinte = response.json().user.contribuinte;
      // this.email = response.json().user.email;
      // this.avatar = response.json().user.get_avatar_url;
      //
      // this.headers.append('Authorization', 'JWT ' + this.token);
      // this.options = new RequestOptions({ headers: this.headers });

      this.loadCurrentUser();
    });
  }

  // refresh() {
  //   if (this.token === null) {
  //     this.login();
  //   } else {
  //     return this.http.post(
  //       `${NFBR_API_TOKEN_REFRESH}`,
  //       {token: this.token}
  //     ).map(response => {
  //       this.token = response.json().token;
  //     });
  //   }
  // }

  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('accessToken');
    console.log('by');
    this.router.navigate(['/']);
  }

  unidadeMedida(page?: number, limit?: number): Observable<any> {
    // aqui tem que chamar refresh() antes...

    let _offset;
    _offset = (page - 1) * limit;
    return this.http.get(`${NFBR_API}/unidade_medida/?limit=${limit}&offset=${_offset}`, this.options)
      .map(response => response.json())
      .catch(ErrorHandler.handlerError);
  }

  uf(): Observable<Uf[]> {
    return this.http.get(`${NFBR_API}/uf/`, this.options)
      .map(response => response.json().results)
      .catch(ErrorHandler.handlerError);
  }

  getContribuintes(): void {
    this.http.get(`${NFBR_API}/alterar_contribuinte/`, this.options)
    .map(response => response.json().results)
    .catch(ErrorHandler.handlerError).subscribe(response => {
      this.contribuintes = response;
    });
  }

}

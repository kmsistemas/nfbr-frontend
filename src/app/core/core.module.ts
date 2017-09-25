import {NgModule} from '@angular/core';
import {CoreService} from './core.service';
import {AuthenticationService} from './authentication.service';
import {AuthModule, PROTECTED_FALLBACK_PAGE_URI, PUBLIC_FALLBACK_PAGE_URI, AUTH_SERVICE} from 'ngx-auth';


@NgModule({
  imports: [ AuthModule ],
  providers: [
    AuthenticationService, CoreService,
    { provide: PROTECTED_FALLBACK_PAGE_URI, useValue: '/' },
    { provide: PUBLIC_FALLBACK_PAGE_URI, useValue: '/login' },
    { provide: AUTH_SERVICE, useClass: AuthenticationService }
  ]
})
export class CoreModule {}

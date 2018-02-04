import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CoreService} from '../core/core.service';
import {env} from '../../environments/.env';
import {Router} from "@angular/router";
import {AuthenticationService} from "../core/authentication.service";

@Component({
  selector: 'km-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  loginForm: FormGroup;

  constructor(
    private coreService: CoreService,
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthenticationService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: this.formBuilder.control(env.email, [Validators.required, Validators.pattern(this.emailPattern)]),
      password: this.formBuilder.control(env.password, [Validators.required]),
    });
  }

  // login(form: any) {
  //   console.log(form);
  //   this.coreService.login(form).subscribe(() => {});
  // }

  public login(form: any) {
    this.coreService
      .login(form)
      .subscribe(() => this.router.navigateByUrl('/'));
  }

}

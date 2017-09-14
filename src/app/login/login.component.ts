import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CoreService} from '../core/core.service';
import {env} from '../../environments/.env';

@Component({
  selector: 'km-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  loginForm: FormGroup;

  constructor(private coreService: CoreService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: this.formBuilder.control(env.email, [Validators.required, Validators.pattern(this.emailPattern)]),
      password: this.formBuilder.control(env.password, [Validators.required]),
    });
  }

  login(form: any) {
    console.log(form);
    this.coreService.login(form).subscribe(() => {});
  }

}

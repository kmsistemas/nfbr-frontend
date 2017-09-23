import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CoreService} from '../../core/core.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'km-unidade-medida',
  templateUrl: './unidade-medida.component.html',
  styleUrls: ['./unidade-medida.component.css']
})
export class UnidadeMedidaComponent implements OnInit {
  unidadeMedidaForm: FormGroup;

  constructor(
    private coreService: CoreService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.coreService.unidadeMedidaById(this.activatedRoute.snapshot.params['id'])
      .subscribe(response => {
        this.initForm(response);
      });
  }

  initForm(response: any) {
    this.unidadeMedidaForm = this.formBuilder.group({
      sigla: this.formBuilder.control(response.sigla, [Validators.required]),
      descricao: this.formBuilder.control(response.descricao, [Validators.required]),
    });
  }

  saveUnidadeMedida(unidadeMedida: any) {
    this.coreService.saveUnidadeMedida(unidadeMedida)
      .subscribe(() => {
        this.router.navigate(['/unidade_medida']);
      });
  }

}

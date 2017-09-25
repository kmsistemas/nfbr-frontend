import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {CoreService} from '../../core/core.service';
import {NFBR_API} from '../../app.api';


@Component({
  selector: 'km-produto',
  templateUrl: './produto.component.html'
})
export class ProdutoComponent implements OnInit {
  produtoForm: FormGroup;

  // public exampleData: Array<Select2OptionData>;
  public options: Select2Options;
  public ajaxOptions: Select2AjaxOptions;

  constructor(
    private coreService: CoreService,
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.coreService.produtoById(this.activatedRoute.snapshot.params['id'])
      .subscribe(response => {
        this.initForm(response);
      });

    this.ajaxOptions = {
        url: `${NFBR_API}/lookups/ncm/`,
        headers: this.coreService.headersAjax,
        dataType: 'json',
        delay: 250,
        cache: true,
        data: (params: any) => {
            return {
                search: params.term,
                page: params.page
            };
        },
        processResults: (data: any, params: any) => {
            params.page = params.page || 1;

            return {
                results: $.map(data.results, function(obj) {
                    return {id: obj.id, text: obj.text};
                }),
                pagination: {
                    more: (params.page * 20) < data.count
                }
            };
        },
    };

    this.options = {
      ajax: this.ajaxOptions,
      language: 'pt-BR',
      placeholder: 'Procure por um NCM',
    };
  }

  initForm(response: any) {
    this.produtoForm = this.formBuilder.group({
      codigo: this.formBuilder.control(response.codigo, [Validators.required]),
      descricao: this.formBuilder.control(response.descricao, [Validators.required]),
      situacao: this.formBuilder.control(response.situacao, [Validators.required]),
    });
  }

  saveProduto(produto: any) {
    this.coreService.saveProduto(produto)
      .subscribe(() => {
        this.router.navigate(['/produto']);
      });
  }

}

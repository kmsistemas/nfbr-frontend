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

  public optionsUnidadeMedida: Select2Options;
  public optionsNcm: Select2Options;
  public optionsCstIcms: Select2Options;
  public optionsCstPis: Select2Options;
  public optionsCstCofins: Select2Options;
  public optionsCfop: Select2Options;

  public ajaxOptionsUnidadeMedida: Select2AjaxOptions;
  public ajaxOptionsNcm: Select2AjaxOptions;
  public ajaxOptionsCstIcms: Select2AjaxOptions;
  public ajaxOptionsCstPis: Select2AjaxOptions;
  public ajaxOptionsCstCofins: Select2AjaxOptions;
  public ajaxOptionsCfop: Select2AjaxOptions;

  constructor(
    private coreService: CoreService,
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {

    // this.ajaxOptions = {
    //     url: `${NFBR_API}/lookups/ncm/`,
    //     headers: this.coreService.headersAjax,
    //     dataType: 'json',
    //     delay: 250,
    //     cache: true,
    //     data: (params: any) => {
    //         return {
    //             search: params.term,
    //             page: params.page
    //         };
    //     },
    //     processResults: (data: any, params: any) => {
    //         params.page = params.page || 1;
    //
    //         return {
    //             results: $.map(data.results, function(obj) {
    //                 return {id: obj.id, text: obj.text};
    //             }),
    //             pagination: {
    //                 more: (params.page * 20) < data.count
    //             }
    //         };
    //     },
    // };

    // this.optionsNcm = {
    //   ajax: this.ajaxOptionsNcm,
    //   language: 'pt-BR',
    //   placeholder: 'Procure por um NCM',
    //   multiple: false,
    //   // initSelection: function (element, callback) {
    //   //   const data = {id: element.val(), text: element.val()};
    //   //   callback(data);
    //   // }
    // };

    this.ajaxOptionsUnidadeMedida = this.getAjaxOptions('unidade_medida');
    this.optionsUnidadeMedida = this.getOptions('Unidade de Medida', this.ajaxOptionsUnidadeMedida);

    this.ajaxOptionsNcm = this.getAjaxOptions('ncm');
    this.optionsNcm = this.getOptions('NCM', this.ajaxOptionsNcm);

    this.ajaxOptionsCstIcms = this.getAjaxOptions('cst', '&icms=S');
    this.optionsCstIcms = this.getOptions('CST ICMS', this.ajaxOptionsCstIcms);

    this.ajaxOptionsCstPis = this.getAjaxOptions('cst', '&pis=S');
    this.optionsCstPis = this.getOptions('CST PIS', this.ajaxOptionsCstPis);

    this.ajaxOptionsCstCofins = this.getAjaxOptions('cst', '&cofins=S');
    this.optionsCstCofins = this.getOptions('CST COFINS', this.ajaxOptionsCstCofins);

    this.ajaxOptionsCfop = this.getAjaxOptions('cfop');
    this.optionsCfop = this.getOptions('CFOP', this.ajaxOptionsCfop);

    if (this.activatedRoute.snapshot.params['id'] !== undefined) {
      this.coreService.produtoById(this.activatedRoute.snapshot.params['id'])
        .subscribe(response => {
          this.initForm(response);
        });
    } else {
      this.initForm({});
    }
  }

  public changedUnidadeMedida(e: any): void {
    this.produtoForm.controls['id_unidade_medida'].setValue(e.value);
  }

  public changedNcm(e: any): void {
    this.produtoForm.controls['id_ncm'].setValue(e.value);
  }

  public changedCstIcms(e: any): void {
    this.produtoForm.controls['id_cst_icms'].setValue(e.value);
  }

  public changedCstPis(e: any): void {
    this.produtoForm.controls['id_cst_pis'].setValue(e.value);
  }

  public changedCstCofins(e: any): void {
    this.produtoForm.controls['id_cst_cofins'].setValue(e.value);
  }

  public changedCfop(e: any): void {
    this.produtoForm.controls['id_cfop'].setValue(e.value);
  }

  initForm(response: any) {
    this.produtoForm = this.formBuilder.group({
      id_produto: this.formBuilder.control(response.id_produto),
      codigo: this.formBuilder.control(response.codigo, [Validators.required]),
      descricao: this.formBuilder.control(response.descricao, [Validators.required]),
      situacao: this.formBuilder.control(response.situacao, [Validators.required]),
      preco_venda: this.formBuilder.control(response.preco_venda),
      origem: this.formBuilder.control(response.origem),
      id_unidade_medida: this.formBuilder.control(response.id_unidade_medida),
      id_ncm: this.formBuilder.control(response.id_ncm),
      id_cst_icms: this.formBuilder.control(response.id_cst_icms),
      aliq_icms: this.formBuilder.control(response.aliq_icms),
      id_cst_pis: this.formBuilder.control(response.id_cst_pis),
      aliq_pis: this.formBuilder.control(response.aliq_pis),
      id_cst_cofins: this.formBuilder.control(response.id_cst_cofins),
      aliq_cofins: this.formBuilder.control(response.aliq_cofins),
      id_cfop: this.formBuilder.control(response.id_cfop),
    });

    if (response.id_unidade_medida) {
      this.optionsUnidadeMedida.placeholder = response.unidade_medida.toString();
    }
    if (response.id_ncm) {
      this.optionsNcm.placeholder = response.ncm.toString();
    }
    if (response.id_cst_icms) {
      this.optionsCstIcms.placeholder = response.cst_icms.toString();
    }
    if (response.id_cst_pis) {
      this.optionsCstPis.placeholder = response.cst_pis.toString();
    }
    if (response.id_cst_cofins) {
      this.optionsCstCofins.placeholder = response.cst_cofins.toString();
    }
    if (response.id_cfop) {
      this.optionsCfop.placeholder = response.cfop.toString();
    }
  }

  saveProduto(produto: any) {
    this.coreService.saveProduto(produto)
      .subscribe(() => {
        this.router.navigate(['/produto']);
      });
  }

  getAjaxOptions(url: String, param: String = '') {
    return {
      url: `${NFBR_API}/lookups/${url}?${param}`,
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
  };

  getOptions(Label: String, ajax: any) {
    return {
      ajax: ajax,
      language: 'pt-BR',
      placeholder: 'Procure por um ' + Label,
      multiple: false,
      // initSelection: function (element, callback) {
      //   const data = {id: element.val(), text: element.val()};
      //   callback(data);
      // }
    };
  }

}

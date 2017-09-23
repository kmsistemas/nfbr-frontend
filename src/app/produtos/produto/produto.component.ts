import { Component, OnInit } from '@angular/core';
import {CoreService} from '../../core/core.service';
import {NFBR_API} from '../../app.api';


@Component({
  selector: 'km-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  // public exampleData: Array<Select2OptionData>;
  public options: Select2Options;
  public ajaxOptions: Select2AjaxOptions;

  constructor(private coreService: CoreService) { }

  ngOnInit() {
    // this.coreService.lookupNcm().subscribe(response => {
    //   this.exampleData = response.results;
    // });

    console.log(this.coreService.headersAjax);
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
            console.log('data: ', data);

            console.log(params.page);
            console.log(data.count);

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



    // this.exampleData = [
    //   {
    //     id: 'basic1',
    //     text: 'Basic 1'
    //   },
    //   {
    //     id: 'basic2',
    //     disabled: true,
    //     text: 'Basic 2'
    //   },
    //   {
    //     id: 'basic3',
    //     text: 'Basic 3'
    //   },
    //   {
    //     id: 'basic4',
    //     text: 'Basic 4'
    //   }
    // ];
  }

  // lookupNcm(): void {
  //   this.coreService.lookupNcm().subscribe(response => {
  //     this.ncms = response.results;
  //   });
  // }

}

import { Component, OnInit } from '@angular/core';
import {UnidadeMedida} from "./unidades-medida.model";
import {CoreService} from "../core/core.service";

@Component({
  selector: 'km-unidades-medida',
  templateUrl: './unidades-medida.component.html',
  styleUrls: ['./unidades-medida.component.css']
})
export class UnidadesMedidaComponent implements OnInit {
  unidadesMedida: UnidadeMedida[];

  loading = false;
  total = 0;
  page = 1;
  limit = 5;

  constructor(private coreService: CoreService) { }

  ngOnInit() {
    // this.coreService.unidadeMedida().subscribe(
    //   unidadesMedida => this.unidadesMedida = unidadesMedida
    //   // unidadesMedida => console.log(unidadesMedida)
    // );
    this.getUnidadesMedida();
  }

  getUnidadesMedida(): void {
    this.loading = true;
    this.coreService.unidadeMedida(this.page, this.limit).subscribe(response => {
      this.total = response.count;
      this.unidadesMedida = response.results;
      this.loading = false;
    });
  }

  goToPage(n: number): void {
    this.page = n;
    this.getUnidadesMedida();
  }

  onNext(): void {
    this.page++;
    this.getUnidadesMedida();
  }

  onPrev(): void {
    this.page--;
    this.getUnidadesMedida();
  }

}

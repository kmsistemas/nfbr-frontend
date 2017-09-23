import { Component, OnInit } from '@angular/core';
import {CoreService} from "../core/core.service";

@Component({
  selector: 'km-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  produtos: any;

  loading = false;
  total = 0;
  page = 1;
  limit = 5;

  constructor(private coreService: CoreService) { }

  ngOnInit() {
    this.getProdutos();
  }

  getProdutos(): void {
    this.loading = true;
    this.coreService.produtos(this.page, this.limit).subscribe(response => {
      this.total = response.count;
      this.produtos = response.results;
      this.loading = false;
    });
  }

  goToPage(n: number): void {
    this.page = n;
    this.getProdutos();
  }

  onNext(): void {
    this.page++;
    this.getProdutos();
  }

  onPrev(): void {
    this.page--;
    this.getProdutos();
  }

}

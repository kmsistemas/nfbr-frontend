import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PaginationComponent} from "./pagination/pagination.component";
import {CoreService} from "../core/core.service";


@NgModule({
  declarations: [PaginationComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [PaginationComponent,
            CommonModule, FormsModule, ReactiveFormsModule],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [CoreService]
    };
  }
}

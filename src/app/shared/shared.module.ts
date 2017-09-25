import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PaginationComponent} from './pagination/pagination.component';
import {CoreService} from '../core/core.service';
import {InputComponent} from './input/input.component';


@NgModule({
  declarations: [InputComponent, PaginationComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [InputComponent, PaginationComponent,
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

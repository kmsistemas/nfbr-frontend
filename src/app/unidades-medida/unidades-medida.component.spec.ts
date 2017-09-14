import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadesMedidaComponent } from './unidades-medida.component';

describe('UnidadesMedidaComponent', () => {
  let component: UnidadesMedidaComponent;
  let fixture: ComponentFixture<UnidadesMedidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnidadesMedidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnidadesMedidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TributacaoComponent } from './tributacao.component';

describe('TributacaoComponent', () => {
  let component: TributacaoComponent;
  let fixture: ComponentFixture<TributacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TributacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TributacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

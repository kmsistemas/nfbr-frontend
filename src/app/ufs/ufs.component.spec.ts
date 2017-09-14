import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UfsComponent } from './ufs.component';

describe('UfsComponent', () => {
  let component: UfsComponent;
  let fixture: ComponentFixture<UfsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UfsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UfsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

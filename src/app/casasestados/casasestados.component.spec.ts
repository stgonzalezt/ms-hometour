import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasasestadosComponent } from './casasestados.component';

describe('CasasestadosComponent', () => {
  let component: CasasestadosComponent;
  let fixture: ComponentFixture<CasasestadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasasestadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasasestadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

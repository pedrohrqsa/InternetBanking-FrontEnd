import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InativarContaComponent } from './inativar-conta.component';

describe('InativarContaComponent', () => {
  let component: InativarContaComponent;
  let fixture: ComponentFixture<InativarContaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InativarContaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InativarContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

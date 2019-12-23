import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtivarContaComponent } from './ativar-conta.component';

describe('AtivarContaComponent', () => {
  let component: AtivarContaComponent;
  let fixture: ComponentFixture<AtivarContaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtivarContaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtivarContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarInfoComponent } from './alterar-info.component';

describe('AlterarInfoComponent', () => {
  let component: AlterarInfoComponent;
  let fixture: ComponentFixture<AlterarInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlterarInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

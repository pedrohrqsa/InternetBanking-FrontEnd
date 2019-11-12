import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosContaComponent } from './infos-conta.component';

describe('InfosContaComponent', () => {
  let component: InfosContaComponent;
  let fixture: ComponentFixture<InfosContaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfosContaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfosContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Aa123Component } from './aa123.component';

describe('Aa123Component', () => {
  let component: Aa123Component;
  let fixture: ComponentFixture<Aa123Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Aa123Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Aa123Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

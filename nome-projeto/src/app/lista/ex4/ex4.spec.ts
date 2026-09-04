import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex4Component } from './ex4';

describe('Ex4', () => {
  let component: Ex4Component;
  let fixture: ComponentFixture<Ex4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex4Component);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

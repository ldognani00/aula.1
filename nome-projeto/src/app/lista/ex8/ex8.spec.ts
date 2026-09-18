import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex8Component } from './ex8';

describe('Ex8', () => {
  let component: Ex8Component;
  let fixture: ComponentFixture<Ex8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex8Component);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

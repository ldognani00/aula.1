import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex7Component } from './ex7';

describe('Ex7', () => {
  let component: Ex7Component;
  let fixture: ComponentFixture<Ex7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex7Component);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

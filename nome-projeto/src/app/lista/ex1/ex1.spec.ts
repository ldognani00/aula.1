import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex1Component } from './ex1';

describe('Ex1', () => {
  let component: Ex1Component;
  let fixture: ComponentFixture<Ex1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex1Component);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

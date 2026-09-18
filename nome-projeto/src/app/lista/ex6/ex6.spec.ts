import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex6Component } from './ex6';

describe('Ex6', () => {
  let component: Ex6Component;
  let fixture: ComponentFixture<Ex6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex6Component);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

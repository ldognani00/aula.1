import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex11Component } from './ex11';

describe('Ex11', () => {
  let component: Ex11Component;
  let fixture: ComponentFixture<Ex11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex11Component);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

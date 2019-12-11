import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneWayDataBindingComponent } from './one-way-data-binding.component';

describe('OneWayDataBindingComponent', () => {
  let component: OneWayDataBindingComponent;
  let fixture: ComponentFixture<OneWayDataBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneWayDataBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneWayDataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

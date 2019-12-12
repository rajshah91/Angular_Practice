import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertBindingComponent } from './propert-binding.component';

describe('PropertBindingComponent', () => {
  let component: PropertBindingComponent;
  let fixture: ComponentFixture<PropertBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

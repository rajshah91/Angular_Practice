import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentInputPassUsingModelComponent } from './component-input-pass-using-model.component';

describe('ComponentInputPassUsingModelComponent', () => {
  let component: ComponentInputPassUsingModelComponent;
  let fixture: ComponentFixture<ComponentInputPassUsingModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentInputPassUsingModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentInputPassUsingModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentInputPassComponent } from './component-input-pass.component';

describe('ComponentInputPassComponent', () => {
  let component: ComponentInputPassComponent;
  let fixture: ComponentFixture<ComponentInputPassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentInputPassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentInputPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

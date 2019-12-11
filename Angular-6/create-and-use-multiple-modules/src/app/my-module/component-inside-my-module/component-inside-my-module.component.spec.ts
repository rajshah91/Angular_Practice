import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentInsideMyModuleComponent } from './component-inside-my-module.component';

describe('ComponentInsideMyModuleComponent', () => {
  let component: ComponentInsideMyModuleComponent;
  let fixture: ComponentFixture<ComponentInsideMyModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentInsideMyModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentInsideMyModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

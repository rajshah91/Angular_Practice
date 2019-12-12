import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentWithTemplateComponent } from './component-with-template.component';

describe('ComponentWithTemplateComponent', () => {
  let component: ComponentWithTemplateComponent;
  let fixture: ComponentFixture<ComponentWithTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentWithTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentWithTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

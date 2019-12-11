import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnClickToggleComponent } from './on-click-toggle.component';

describe('OnClickToggleComponent', () => {
  let component: OnClickToggleComponent;
  let fixture: ComponentFixture<OnClickToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnClickToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnClickToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

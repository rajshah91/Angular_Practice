import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssStylingComponent } from './css-styling.component';

describe('CssStylingComponent', () => {
  let component: CssStylingComponent;
  let fixture: ComponentFixture<CssStylingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssStylingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssStylingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingLogoutComponent } from './setting-logout.component';

describe('SettingLogoutComponent', () => {
  let component: SettingLogoutComponent;
  let fixture: ComponentFixture<SettingLogoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingLogoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

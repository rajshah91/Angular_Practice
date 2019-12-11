import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentInputPassComponent } from './component-input-pass/component-input-pass.component';
import { ComponentInputPassUsingModelComponent } from './component-input-pass-using-model/component-input-pass-using-model.component';
import { CssStylingComponent } from './css-styling/css-styling.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentInputPassComponent,
    ComponentInputPassUsingModelComponent,
    CssStylingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

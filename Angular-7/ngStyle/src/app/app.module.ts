import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentWithTemplateComponent } from './component-with-template/component-with-template.component';
import { PropertBindingComponent } from './propert-binding/propert-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentWithTemplateComponent,
    PropertBindingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

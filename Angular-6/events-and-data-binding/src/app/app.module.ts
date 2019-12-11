import { BrowserModule } from '@angular/platform-browser';
import { NgModule,} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { OnClickToggleComponent } from './on-click-toggle/on-click-toggle.component';
import { OneWayDataBindingComponent } from './one-way-data-binding/one-way-data-binding.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    OnClickToggleComponent,
    OneWayDataBindingComponent,
    TwoWayDataBindingComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

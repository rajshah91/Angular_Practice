import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyModuleModule } from './my-module/my-module.module';
import { TestServiceService } from './test-service.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MyModuleModule
  ],
  providers: [
    TestServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

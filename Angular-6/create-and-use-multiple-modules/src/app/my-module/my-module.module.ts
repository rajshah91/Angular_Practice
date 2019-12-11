import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentInsideMyModuleComponent } from './component-inside-my-module/component-inside-my-module.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ComponentInsideMyModuleComponent],
  exports :[
    ComponentInsideMyModuleComponent
  ]
})
export class MyModuleModule { }

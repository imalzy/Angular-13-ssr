import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CAboutComponent } from './c-about.component';



@NgModule({
  declarations: [CAboutComponent],
  imports: [
    CommonModule
  ],
  exports: [CAboutComponent]
})
export class CAboutModule { }

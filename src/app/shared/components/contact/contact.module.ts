import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CContactComponent } from './c-contact.component';



@NgModule({
  declarations: [CContactComponent],
  imports: [
    CommonModule
  ],
  exports: [CContactComponent]
})
export class CContactModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CBlogComponent } from './c-blog.component';



@NgModule({
  declarations: [CBlogComponent],
  imports: [
    CommonModule
  ],
  exports: [CBlogComponent]
})
export class CBlogModule { }

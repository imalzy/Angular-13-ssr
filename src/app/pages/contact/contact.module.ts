import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { CContactModule } from 'src/app/shared/components/contact/contact.module';


@NgModule({
  declarations: [
    ContactComponent,
  ],
  imports: [
    ContactRoutingModule,
    CommonModule,
    CContactModule
  ]
})
export class ContactModule { }

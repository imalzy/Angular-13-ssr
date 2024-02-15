import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirestoreService } from '../../services/firestore.services';
import { CProductComponent } from './c-product.component';



@NgModule({
  declarations: [CProductComponent],
  imports: [
    CommonModule
  ],
  exports: [CProductComponent],
  providers: [FirestoreService]
})
export class CProductModule { }

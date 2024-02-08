import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductComponent } from './components/product/product.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FirestoreService } from './services/firestore.services';

const COMPONENTS = [
  AboutComponent,
  BlogComponent,
  CarouselComponent,
  ContactComponent,
  ProductComponent,
  TestimonialComponent
]

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
  ],
  exports: [...COMPONENTS, CommonModule, FormsModule, ReactiveFormsModule],
  providers: [FirestoreService]
})
export class SharedModule { }

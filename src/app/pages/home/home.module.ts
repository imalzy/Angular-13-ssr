import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CarouselModule } from 'src/app/shared/components/carousel/carousel.module';
import { CBlogModule } from 'src/app/shared/components/blog/c-blog.module';
import { CProductModule } from 'src/app/shared/components/c-product/product.module';
import { CAboutModule } from 'src/app/shared/components/about/c-about.module';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    HomeRoutingModule,
    CarouselModule,
    CProductModule,
    CAboutModule,
    CBlogModule,
  ]
})
export class HomeModule { }

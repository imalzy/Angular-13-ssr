import { NgModule } from '@angular/core';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent as BlogPages } from './blog.component';
import { CommonModule } from '@angular/common';
import { CBlogModule } from 'src/app/shared/components/blog/c-blog.module';


@NgModule({
  declarations: [
    BlogPages
  ],
  imports: [
    CommonModule,
    CBlogModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }

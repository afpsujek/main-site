import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogMainComponent } from './blog-main/blog-main.component';
import { BlogRoutingModule } from './blog-routing.module';



@NgModule({
  declarations: [BlogMainComponent],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }

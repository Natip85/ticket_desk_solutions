import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { SharedModule } from '../shared/shared.module';
import { SolutionsPageComponent } from './solutions-page/solutions-page.component';



@NgModule({
  declarations: [
    HomePageComponent,
    SolutionsPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class HomeModule { }

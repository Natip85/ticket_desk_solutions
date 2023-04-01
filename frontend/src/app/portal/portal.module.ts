import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalHomeComponent } from './portal-home/portal-home.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    PortalHomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PortalModule { }

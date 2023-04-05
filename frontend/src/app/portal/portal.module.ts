import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalHomeComponent } from './portal-home/portal-home.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NewTicketComponent } from './new-ticket/new-ticket.component';



@NgModule({
  declarations: [
    PortalHomeComponent,
    NewTicketComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class PortalModule { }

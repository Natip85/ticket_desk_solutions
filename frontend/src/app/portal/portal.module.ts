import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalHomeComponent } from './portal-home/portal-home.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { RouterLink } from '@angular/router';
import { TicketPageComponent } from './ticket-page/ticket-page.component';



@NgModule({
  declarations: [
    PortalHomeComponent,
    NewTicketComponent,
    TicketPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterLink
  ]
})
export class PortalModule { }

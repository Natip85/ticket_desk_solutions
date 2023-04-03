import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from '../app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TicketNavbarComponent } from './ticket-navbar/ticket-navbar.component';
import { TitleComponent } from './title/title.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    TicketNavbarComponent,
    TitleComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    TicketNavbarComponent,
    TitleComponent
  ]
})
export class SharedModule { }

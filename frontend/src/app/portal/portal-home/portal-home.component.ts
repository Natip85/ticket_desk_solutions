import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { ApiService } from 'src/app/core/api.service';
import { Ticket } from 'src/app/shared/interfaces/ITickets';

@Component({
  selector: 'app-portal-home',
  templateUrl: './portal-home.component.html',
  styleUrls: ['./portal-home.component.css']
})
export class PortalHomeComponent {
  sectionTitle = 'Tickets'
  sectionIcon = 'fa-solid fa-ticket'
  tickets: Array<Ticket> = [];
  agents = ['Nati', 'Leeav', 'Sharon']
  priorityOptions = ['Low', 'Medium', 'High', 'Urgent']
  statusOptions = ['Open', 'Closed', 'Pending', 'Waiting on response']



    constructor(private api: ApiService, private router: Router, private activeRoute: ActivatedRoute){}

    getAllTickets() {
        this.api.getTickets().subscribe({
            next: (data: Array<Ticket>) => {
              this.tickets = data

            },
              error: (err) => console.log(err)
        })
    }

    ngOnInit(): void {
        this.getAllTickets();
    }

    priorityCss(ticket: Ticket): string{
      if(ticket.priority == 'Low'){
        'green'
      }
      return 'blue'
    }



}

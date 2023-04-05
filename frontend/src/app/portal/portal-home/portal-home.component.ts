import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  editTicketForm = new FormGroup({
        status: new FormControl('', {
            validators: [
                Validators.minLength(2),
                Validators.maxLength(100)
            ]
        }),
        priority: new FormControl('', {
            validators: [
                Validators.minLength(2),
                Validators.maxLength(100)
            ]
        }),
        agent: new FormControl('', {
            validators: [
                Validators.minLength(2),
                Validators.maxLength(100)
            ]
        })
    })

    constructor(private api: ApiService){}

    getAllTickets() {
        this.api.getTickets().subscribe({
            next: (data: Array<Ticket>) => {
              this.tickets = data
              console.log(this.tickets);

            },
              error: (err) => console.log(err)
        })
    }

    ngOnInit(): void {
        this.getAllTickets();

    }


  onSubmit(){
    // console.log(this.editTicketForm.value);

  }

}

import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/core/api.service';
import { Ticket } from 'src/app/shared/interfaces/ITickets';

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html',
  styleUrls: ['./new-ticket.component.css']
})
export class NewTicketComponent {
  sectionTitle = 'Add a new tickets'
  sectionIcon = 'fa-solid fa-ticket'

  addTicketForm = new FormGroup({
        subject: new FormControl('', {
            validators: [
                Validators.minLength(2),
                Validators.maxLength(100)
            ]
        }),
        message: new FormControl('', {
            validators: [
                Validators.minLength(2),
                Validators.maxLength(3000)
            ]
        }),
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

    onSubmit(){
       if (this.addTicketForm.invalid) {
            return;
        }

        this.api.addTicket(this.addTicketForm.value).subscribe({
            next: (data: Ticket) => {
                this.addTicketForm.reset();
                // this.getAllCustomers();

                // this.router.navigate(['lecturers']);
                // this.getTasks();
            },
            error: (err) => console.log(err)
        })
    }
}

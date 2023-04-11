import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { ApiService } from 'src/app/core/api.service';
import { Ticket } from 'src/app/shared/interfaces/ITickets';

@Component({
  selector: 'app-selected-ticket-page',
  templateUrl: './selected-ticket-page.component.html',
  styleUrls: ['./selected-ticket-page.component.css']
})
export class SelectedTicketPageComponent implements OnInit {

  showNotification = false;
  text = 'Ticket sucessfully updated!'

  agents = ['Nati', 'Leeav', 'Sharon']
  priorityOptions = ['Low', 'Medium', 'High', 'Urgent']
  statusOptions = ['Open', 'Closed', 'Pending', 'Waiting on response']

  ticket: Ticket | null = null;

  @Input() sectionTitle = 'Ticket page'
  @Input() sectionIcon = 'fa-solid fa-ticket'

  constructor(private api: ApiService, private activeRoute: ActivatedRoute){}

    ngOnInit(): void {
        this.activeRoute.paramMap.pipe(
            switchMap(params => {
                const id = params.get('id') as string;
                return this.api.getOneTicket(id);
            })
        ).subscribe({
            next: (data: Ticket) => {
                this.ticket = data;
                const status = data.status || ''
                const priority = data.priority || ''
                const agent = data.agent || ''
                this.editStatusesForm.get('status')?.setValue(status);
                this.editStatusesForm.get('priority')?.setValue(priority);
                this.editStatusesForm.get('agent')?.setValue(agent);
                this.api.getTickets()

            },
            error: (err) => console.log(err)
        })

    }


    editStatusesForm = new FormGroup({
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
        }),
      })



      OnSubmit(){
        if (this.editStatusesForm.invalid || !this.ticket?._id) {
            return;
        }
        this.api.updateTicket(this.ticket?._id, this.editStatusesForm.value).subscribe({
            next: (data: Ticket) => {
              this.showNotification = true;
        setTimeout(() => {
          this.showNotification = false;
        }, 2000);
        },
          error: (err) => console.log(err)
        })
      }

    notificationClosed(state: boolean) {
      this.showNotification = state;
    }

}

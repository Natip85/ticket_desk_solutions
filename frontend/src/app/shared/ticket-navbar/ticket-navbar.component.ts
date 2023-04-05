import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';
import { User } from '../interfaces/IUserSignup';

@Component({
  selector: 'app-ticket-navbar',
  templateUrl: './ticket-navbar.component.html',
  styleUrls: ['./ticket-navbar.component.css']
})
export class TicketNavbarComponent implements OnInit {

  // user: Array<User> = [];

  showForm = false;

  constructor(private api: ApiService, private router: Router){}

  logout() {
        this.api.deleteToken();
        this.router.navigate(['login']);
    }

     toggleAcc() {
        this.showForm = !this.showForm;
    }

    // getOneUserOnly() {
    //     this.api.getOneUser().subscribe({
    //         next: (data: Array<User>) => {
    //           this.user = data
    //           console.log(this.user);

    //         },
    //         error: (err) => console.log(err)
    //     })
    // }

    ngOnInit(): void {
        // this.getOneUserOnly();
    }

}

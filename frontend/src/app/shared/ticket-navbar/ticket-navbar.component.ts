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

  showForm = false;
  showForm2 = false;

   theUser: User = this.api.getUserInfo()

  constructor(private api: ApiService, private router: Router){}

  logout() {
        this.api.deleteToken();
        this.router.navigate(['login']);
    }

     toggleAcc() {
        this.showForm = !this.showForm;
    }
     toggleAcc2() {
        this.showForm2 = !this.showForm2;
    }

    getFirstInitial(){
      const fInitial = this.api.getUserInfo()
      const initialName = fInitial.name?.charAt(0)
      return initialName
    }

    ngOnInit(): void {
    }

}

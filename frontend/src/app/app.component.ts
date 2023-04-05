import { Component } from '@angular/core';
import { ApiService } from './core/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  constructor(private api: ApiService){}

  // ngAfterViewInit(): void {
  //       this.api.redirectToHome();
  //   }

}

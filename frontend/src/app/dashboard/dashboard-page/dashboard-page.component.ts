import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent {
  @Input() sectionTitle = 'Dashboard'
  @Input() sectionIcon = 'bi bi-speedometer'

  currentDay = Date.now()
}

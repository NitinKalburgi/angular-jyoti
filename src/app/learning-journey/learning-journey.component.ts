import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-learning-journey',
  templateUrl: './learning-journey.component.html',
  styleUrls: ['./learning-journey.component.css']
})
export class LearningJourneyComponent {
  constructor(private router: Router) {}

  selectRole(role: string) {
    this.router.navigate(['/roles'], { queryParams: { selectedRole: role } });
  }
}

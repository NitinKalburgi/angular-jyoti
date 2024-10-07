import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { LearningJourneyComponent } from '../learning-journey/learning-journey.component';
@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
  
})
export class RolesComponent {
  constructor(private router: Router) {}

  selectTab(tab: LearningJourneyComponent) {
    this.router.navigate(['/learning-journey'], { queryParams: { selectTab: LearningJourneyComponent } });
   
  }
  }


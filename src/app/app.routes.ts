import { Routes } from '@angular/router';
import { LearningJourneyComponent } from './learning-journey/learning-journey.component';
import { RolesComponent } from './roles/roles.component';

export const routes: Routes = [
  { path: 'learning-journey', component: LearningJourneyComponent },
  { path: 'roles', component: RolesComponent },
  { path: '', redirectTo: '/learning-journey', pathMatch: 'full' } // Redirect to Learning Journey by default
];

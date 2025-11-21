import { Routes } from '@angular/router';
import { FaceSnapList } from './face-snap-list/face-snap-list';
import {LandingPage} from './landing-page/landing-page';


export const routes: Routes = [
  { path: '', component: LandingPage },
  { path: 'facesnaps', component: FaceSnapList},
];

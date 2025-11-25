import { Routes } from '@angular/router';
import { FaceSnapList } from './face-snaps/components/face-snap-list/face-snap-list';
import {LandingPage} from './landing-page/components/landing-page/landing-page';
import {SingleFaceSnap} from './face-snaps/components/single-face-snap/single-face-snap';
import {NewFaceSnap} from './face-snaps/components/new-face-snap/new-face-snap';
import {authRoutes} from './auth/auth.routes';


export const routes: Routes = [
  { path: '', component: LandingPage },
  {
    path: 'facesnaps',
    loadChildren: () => import('./face-snaps/face-snaps.routes').then((module) => module.faceSnapsRoutes)
  },
  {
    path: 'auth',
    children: authRoutes
  }
];

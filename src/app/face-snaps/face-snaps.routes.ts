import {Routes} from '@angular/router';
import {FaceSnapList} from './components/face-snap-list/face-snap-list';
import {SingleFaceSnap} from './components/single-face-snap/single-face-snap';
import {NewFaceSnap} from './components/new-face-snap/new-face-snap';
import {AuthGuard} from '../core/guards/auth.guard';


export const faceSnapsRoutes: Routes = [
  { path: '', component: FaceSnapList, canActivate: [AuthGuard] },
  { path: 'create', component: NewFaceSnap, canActivate: [AuthGuard] },
  { path: ':id', component: SingleFaceSnap, canActivate: [AuthGuard] },
]

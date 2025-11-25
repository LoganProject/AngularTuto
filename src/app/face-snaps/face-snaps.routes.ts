import {Routes} from '@angular/router';
import {FaceSnapList} from './components/face-snap-list/face-snap-list';
import {SingleFaceSnap} from './components/single-face-snap/single-face-snap';
import {NewFaceSnap} from './components/new-face-snap/new-face-snap';


export const faceSnapsRoutes: Routes = [
  { path: '', component: FaceSnapList },
  { path: 'create', component: NewFaceSnap },
  { path: ':id', component: SingleFaceSnap },
]

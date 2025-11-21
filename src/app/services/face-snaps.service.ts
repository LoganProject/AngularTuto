import {Injectable} from '@angular/core';
import {FaceSnap} from '../models/face-snap';
import {SnapType} from '../models/snap-type.type';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
  private faceSnaps: FaceSnap[] = [
    new FaceSnap (
      'My first FaceSnap',
      'Just a simple description for my first FaceSnap!',
      new Date(),
      15,
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg'
    ),
    new FaceSnap (
      'My other FaceSnap',
      'Just a simple description for my other FaceSnap!',
      new Date(),
      100,
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/First_drop_Black_Mamba_Phantasialand.JPG/250px-First_drop_Black_Mamba_Phantasialand.JPG'
    ).withLocation('Phantasialand, Germany'),
    new FaceSnap (
      'My last FaceSnap',
      'Just a simple description for my last FaceSnap!',
      new Date(),
      4,
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Thompson_Peak_Idaho.JPG/330px-Thompson_Peak_Idaho.JPG'
    )
  ];

  getFaceSnaps(): FaceSnap[] {
    return [...this.faceSnaps];
  }

  getFaceSnapById(id: string): FaceSnap {
    const foundFaceSnap = this.faceSnaps.find((item) => item.id === id);
    if (!foundFaceSnap) {
      throw new Error('No faceSnap found with id ' + id);
    }
    return foundFaceSnap
  }

  snapFaceSnapById(id: string, snapType: SnapType): void {
    const foundFaceSnap = this.getFaceSnapById(id)
    foundFaceSnap.handleSnap(snapType);
  }
}

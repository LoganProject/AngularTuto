import {Injectable} from '@angular/core';
import {FaceSnap} from '../models/face-snap';
import {SnapType} from '../models/snap-type.type';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {

  constructor(private httpClient: HttpClient ) {}

  private faceSnaps: FaceSnap[] = [];

  getFaceSnaps(): Observable<FaceSnap[]> {
    return this.httpClient.get<FaceSnap[]>('http://localhost:3000/facesnaps');
  }

  getFaceSnapById(id: string): Observable<FaceSnap> {
    return this.httpClient.get<FaceSnap>(`http://localhost:3000/facesnaps/${id}`);
  }

  snapFaceSnapById(id: string, snapType: SnapType): void {
    // const foundFaceSnap = this.getFaceSnapById(id)
    // foundFaceSnap.handleSnap(snapType);
  }

  addFaceSnap(formValue: { title: string, description: string, imageUrl: string, location?: string }) {
    let toAddFaceSnap = new FaceSnap(
      formValue.title,
      formValue.description,
      new Date(),
      0,
      formValue.imageUrl,
    );
    if(formValue.location) {
      toAddFaceSnap = toAddFaceSnap.withLocation(formValue.location)
    }
    this.faceSnaps.push(toAddFaceSnap);
  }
}

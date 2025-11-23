import {Injectable} from '@angular/core';
import {FaceSnap} from '../models/face-snap';
import {SnapType} from '../models/snap-type.type';
import {HttpClient} from '@angular/common/http';
import {map, Observable, switchMap, tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {

  constructor(private httpClient: HttpClient ) {}

  getFaceSnaps(): Observable<FaceSnap[]> {
    return this.httpClient.get<FaceSnap[]>('http://localhost:3000/facesnaps');
  }

  getFaceSnapById(id: number): Observable<FaceSnap> {
    return this.httpClient.get<FaceSnap>(`http://localhost:3000/facesnaps/${id}`);
  }

  snapFaceSnapById(id: number, snapType: SnapType): Observable<FaceSnap> {
    return this.getFaceSnapById(id).pipe(
      map((faceSnap) => ({
        ...faceSnap,
        snaps: faceSnap.snaps + (snapType === 'snap' ? 1 : -1)
      })),
      switchMap((updatedFaceSnap) => this.httpClient.put<FaceSnap>(`http://localhost:3000/facesnaps/${updatedFaceSnap.id}`, updatedFaceSnap))
    );
  }

  addFaceSnap(formValue: { title: string, description: string, imageUrl: string, location?: string }): Observable<FaceSnap> {
    // let toAddFaceSnap = new FaceSnap(
    //   formValue.title,
    //   formValue.description,
    //   new Date(),
    //   0,
    //   formValue.imageUrl,
    // );
    // if(formValue.location) {
    //   toAddFaceSnap = toAddFaceSnap.withLocation(formValue.location)
    // }

    return this.getFaceSnaps().pipe(
      map((faceSnaps) => faceSnaps.sort((a, b) => a.id - b.id)),
      map((sortedFaceSnaps) => sortedFaceSnaps[sortedFaceSnaps.length - 1].id),
      map((lastId) => {
        let toAddFaceSnap = new FaceSnap(
          formValue.title,
          formValue.description,
          new Date(),
          0,
          formValue.imageUrl,
          lastId + 1
        )
        if(formValue.location) {
          toAddFaceSnap = toAddFaceSnap.withLocation(formValue.location)
        }
        return toAddFaceSnap;
      }),
      switchMap((toAddFaceSnap) => this.httpClient.post<FaceSnap>(`http://localhost:3000/facesnaps`, toAddFaceSnap))
    );
  }
}

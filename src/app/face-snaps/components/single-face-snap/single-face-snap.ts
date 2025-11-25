import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../../../core/models/face-snap';
import {AsyncPipe, DatePipe, NgClass, NgStyle, UpperCasePipe} from '@angular/common';
import {FaceSnapsService} from '../../../core/services/face-snaps.service';
import {ActivatedRoute, RouterLink, RouterModule} from '@angular/router';
import {Observable, tap} from 'rxjs';

@Component({
  selector: 'app-single-face-snap',
  imports: [
    NgStyle,
    NgClass,
    UpperCasePipe,
    DatePipe,
    RouterLink,
    AsyncPipe,
  ],
  templateUrl: './single-face-snap.html',
  styleUrl: './single-face-snap.scss',
})
export class SingleFaceSnap implements OnInit {
  faceSnap$!: Observable<FaceSnap>;
  hasSnapped!: boolean;
  snapButtonText!: string;

  constructor(
    private faceSnapsService: FaceSnapsService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.setupInterface();
    this.getSnapFace();
  }

  onSnapClick(id: number): void {
    if(this.hasSnapped) {
      this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(id, 'unsnap').pipe(
        tap((s) => {
          this.snapButtonText = 'Oh Snap!';
          this.hasSnapped = !this.hasSnapped;
        })
      );
    } else {
      this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(id, 'unsnap').pipe(
        tap(() => {
          this.snapButtonText = 'Oops, unSnap!';
          this.hasSnapped = !this.hasSnapped;
        })
      );
    }
  }

  private setupInterface() {
    this.hasSnapped = false;
    this.snapButtonText = 'Oh Snap!';
  }

  private getSnapFace() {
    const faceSnapId = this.route.snapshot.params['id'];
    this.faceSnap$ = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }
}

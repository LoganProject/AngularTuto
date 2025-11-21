import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import {DatePipe, NgClass, NgStyle, UpperCasePipe} from '@angular/common';
import {FaceSnapsService} from '../services/face-snaps.service';
import {ActivatedRoute, RouterLink} from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  imports: [
    NgStyle,
    NgClass,
    UpperCasePipe,
    DatePipe,
    RouterLink
  ],
  templateUrl: './single-face-snap.html',
  styleUrl: './single-face-snap.scss',
})
export class SingleFaceSnap implements OnInit {
  faceSnap!: FaceSnap;
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

  onSnapClick(): void {
    if(this.hasSnapped) {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.snapButtonText = 'Oh Snap!';
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.snapButtonText = 'Oops, unSnap!';
    }
    this.hasSnapped = !this.hasSnapped;
  }

  private setupInterface() {
    this.hasSnapped = false;
    this.snapButtonText = 'Oh Snap!';
  }

  private getSnapFace() {
    const faceSnapId = this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }
}

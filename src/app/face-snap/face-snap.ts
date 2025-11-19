import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';

@Component({
  selector: 'app-face-snap',
  imports: [],
  templateUrl: './face-snap.html',
  styleUrl: './face-snap.scss',
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  hasSnapped!: boolean;
  snapButtonText!: string;

  ngOnInit(): void {
    this.hasSnapped = false;
    this.snapButtonText = 'Oh Snap!';
  }

  onSnapClick(): void {
    if(this.hasSnapped) {
      this.faceSnap.removeSnap();
      this.snapButtonText = 'Oh Snap!';
    } else {
      this.faceSnap.addSnap();
      this.snapButtonText = 'Oops, unSnap!';
    }
    this.hasSnapped = !this.hasSnapped;
  }
}

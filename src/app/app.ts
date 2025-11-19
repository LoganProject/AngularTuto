import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaceSnapComponent } from './face-snap/face-snap';
import { FaceSnap } from './models/face-snap';

@Component({
  selector: 'app-root',
  imports: [
    FaceSnapComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit{
  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;

  ngOnInit(): void {
    this.mySnap = new FaceSnap (
      'My first FaceSnap',
      'Just a simple description for my first FaceSnap!',
      new Date(),
      5,
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg'
    );

    this.myOtherSnap = new FaceSnap (
      'My other FaceSnap',
      'Just a simple description for my other FaceSnap!',
      new Date(),
      5,
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/First_drop_Black_Mamba_Phantasialand.JPG/250px-First_drop_Black_Mamba_Phantasialand.JPG'
    );

    this.myLastSnap = new FaceSnap (
      'My last FaceSnap',
      'Just a simple description for my last FaceSnap!',
      new Date(),
      5,
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Thompson_Peak_Idaho.JPG/330px-Thompson_Peak_Idaho.JPG'
    );
  }
}

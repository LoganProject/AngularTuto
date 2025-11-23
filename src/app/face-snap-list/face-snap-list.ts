import {Component, OnDestroy, OnInit} from '@angular/core';
import {FaceSnapComponent} from '../face-snap/face-snap';
import {FaceSnap} from '../models/face-snap';
import {FaceSnapsService} from '../services/face-snaps.service';
import {interval, Observable, Subject, takeUntil, tap} from 'rxjs';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-face-snap-list',
  imports: [
    FaceSnapComponent,
    AsyncPipe
  ],
  templateUrl: './face-snap-list.html',
  styleUrl: './face-snap-list.scss',
})
export class FaceSnapList implements OnInit, OnDestroy {
  faceSnaps$!: Observable<FaceSnap[]>;

  private destroy$!: Subject<boolean>;

  constructor(private faceSnapsService: FaceSnapsService) {}

  ngOnInit(): void {
    this.faceSnaps$ = this.faceSnapsService.getFaceSnaps();

    this.destroy$ = new Subject<boolean>()

    interval(1000).pipe(
      takeUntil(this.destroy$),
      tap(console.log)
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }
}

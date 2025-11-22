import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {map, Observable} from 'rxjs';
import {FaceSnap} from '../models/face-snap';
import {AsyncPipe, DatePipe, UpperCasePipe} from '@angular/common';

@Component({
  selector: 'app-new-face-snap',
  imports: [
    ReactiveFormsModule,
    AsyncPipe,
    UpperCasePipe,
    DatePipe
  ],
  templateUrl: './new-face-snap.html',
  styleUrl: './new-face-snap.scss',
})
export class NewFaceSnap implements OnInit {
    snapForm!: FormGroup;
    faceSnapPreview$!: Observable<FaceSnap>;

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit() {
      this.snapForm = this.formBuilder.group({
        title: [null],
        description: [null],
        imgUrl: [null],
        location : [null],
      });

      this.faceSnapPreview$ = this.snapForm.valueChanges.pipe(
        map((formValue) => ({
          ...formValue,
          createdAt: new Date(),
          id: 0,
          snaps: 0
        }))
      );
    }

    onSubmitForm(): void {
      console.log(this.snapForm.value);
    }
}

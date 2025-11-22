import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {map, Observable} from 'rxjs';
import {FaceSnap} from '../models/face-snap';
import {AsyncPipe, DatePipe, UpperCasePipe} from '@angular/common';
import {FaceSnapsService} from '../services/face-snaps.service';
import {Router} from '@angular/router';

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
    urlRegex!: RegExp;

    constructor(
      private formBuilder: FormBuilder,
      private faceSnapsService: FaceSnapsService,
      private router: Router,
    ) {}

    ngOnInit() {
      this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;

      this.snapForm = this.formBuilder.group(
        {
        title: [null, Validators.required],
        description: [null, Validators.required],
        imgUrl: [null, [Validators.required, Validators.pattern(this.urlRegex)]],
        location : [null],
        },
        {
          updateOn: 'blur'
        }
        );

      const a = this.snapForm.value;
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
      this.faceSnapsService.addFaceSnap(this.snapForm.value);
      this.router.navigateByUrl('facesnaps')
    }
}

import {Component, OnInit} from '@angular/core';
import {Header} from './header/header';
import {RouterOutlet} from '@angular/router';
import {interval, map, Observable} from 'rxjs';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    Header,
    RouterOutlet,
    AsyncPipe
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  interval$!: Observable<string>;

  ngOnInit() {
    this.interval$ = interval(1000).pipe(
      map((value) => value % 2 === 0 ? `${value} --> Pair`: `${value} --> Impair`)
    );
  }
}

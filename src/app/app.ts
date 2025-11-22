import {Component} from '@angular/core';
import {Header} from './header/header';
import {RouterOutlet} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [
    Header,
    RouterOutlet,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  redTrainsCalled = 0;
  yellowTrainsCalled = 0;
}

import { Component } from '@angular/core';
import {AuthService} from '../../../core/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onLogin(): void {
    this.authService.login();
    this.router.navigateByUrl('/facesnaps');
  }
}

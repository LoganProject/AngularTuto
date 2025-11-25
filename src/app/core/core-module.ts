import {LOCALE_ID, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {httpInterceptorProviders} from './interceptors';
import {HttpClientModule, provideHttpClient} from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR'},
    provideHttpClient(),
    httpInterceptorProviders
  ]
})
export class CoreModule { }

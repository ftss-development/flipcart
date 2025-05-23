import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { AuthGuard } from 'app/auth/helpers';
import { CountryComponent } from './country.component';
import { CountryService } from './country.service';

const routes: Routes = [
  {
    path: 'pages/places/country',
    component: CountryComponent,
    
    data: { animation: 'country' }
  }
];

@NgModule({
  declarations: [CountryComponent],
  imports: [
    CommonModule
  ],
  providers: [CountryService],
})
export class CountryModule { }

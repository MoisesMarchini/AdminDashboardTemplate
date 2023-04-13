import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardsModule } from '../components/cards/cards.module';
import { ProfileComponent } from './profile/profile.component';
import { CalendarComponent } from './calendar/calendar.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ProfileComponent,
    CalendarComponent
  ],
  imports: [
    CommonModule,
    CardsModule,
  ]
})
export class PagesModule { }

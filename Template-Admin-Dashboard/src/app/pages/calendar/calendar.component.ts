import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Moment } from 'moment';

@Component({
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  readonly calendarWeeks = Array(5).fill(0).map((x,i)=>i);
  calendar: Moment[] = [];

  ngOnInit(): void {
    this.generateCalendar();
  }

  isAnotherMonth(date: Moment) {
    console.log(date.month() === moment().month())
    return date.month() !== moment().month();
  }

  getWeek(weekIndex: number) {
    return this.calendar.slice(7 * weekIndex, 7 * weekIndex + 7);
  }

  generateCalendar() {
    const calendarShownDates = 7 * this.calendarWeeks.length;
    const lastSunday = moment().add(-moment().day(), 'days');

    for (let index = 0; index < calendarShownDates; index++) {
      const element = lastSunday.clone().add(index, 'days');
      this.calendar.push(element);
    }
  }
}

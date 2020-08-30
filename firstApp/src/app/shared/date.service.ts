import { Injectable } from '@angular/core';
import { SelectMultipleControlValueAccessor } from '@angular/forms';
import { timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DateService {
  date = new Date();

  constructor() {}

  getDate() {
    // setTimeout(() => console.log('timer'), 1000);
    return new Date();
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  user: string = 'Nicola';
  elements: Array<number> = [1, 2, 3, 4];
  color: boolean = true;
  date = new Date();

  constructor() {}

  ngOnInit(): void {}

  userClick() {
    alert('Clicked!!!');
  }
}

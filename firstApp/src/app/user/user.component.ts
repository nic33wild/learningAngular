import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DateService } from '../shared/date.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  userForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
  });

  // dateService: DateService;
  constructor(public dateService: DateService) {
    // this.dateService = dateService; //Linee commentate sostituite dal public
  }

  ngOnInit(): void {
    this.dateService.date;
  }

  showForm() {
    alert(
      'Your name is : "' +
        this.userForm.value.name +
        '"' +
        ' and your email is : "' +
        this.userForm.value.email +
        '"'
    );
  }
}

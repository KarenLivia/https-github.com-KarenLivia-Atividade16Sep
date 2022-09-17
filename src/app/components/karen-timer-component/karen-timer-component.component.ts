import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-karen-timer-component',
  templateUrl: './karen-timer-component.component.html',
  styleUrls: ['./karen-timer-component.component.css']
})
export class KarenTimerComponentComponent implements OnInit {
  counter = 0;

  timer = setInterval(() => {
    this.counter = this.counter + 1;
  }, 1000);

  constructor() { }

  ngOnInit() {
  }

}
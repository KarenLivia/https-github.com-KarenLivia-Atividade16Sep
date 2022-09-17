import { Component, forwardRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-karen-random-numbers-component',
  templateUrl: './karen-random-numbers-component.component.html',
  styleUrls: ['./karen-random-numbers-component.component.css']
})
export class KarenRandomNumbersComponentComponent implements OnInit {

  @Input() quantidade: string;

  constructor() { }

  ngOnInit() {
  }

  getRandomNumbers(){
    for (let i=0 ; i < Number(this.quantidade); i ++){
      return Number(this.quantidade) * 3;
    }
  }

}
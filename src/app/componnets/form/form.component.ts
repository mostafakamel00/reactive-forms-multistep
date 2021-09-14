import { Component, OnInit } from '@angular/core';
import { toggleFade } from 'src/app/animations/animation';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  animations: [toggleFade],
})
export class FormComponent implements OnInit {
  steps: any = 1;
  isLogin: boolean;
  constructor() {
    this.isLogin = true;
  }

  ngOnInit(): void {}

  next() {
    if (this.steps == 1 || this.steps == 2) {
      this.steps++;
    }
  }
  previous() {
    if (this.steps == 2 || this.steps == 3) {
      --this.steps;
    }
  }
}

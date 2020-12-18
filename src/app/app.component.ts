import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  antalPlader: number[][][];
  numbers = [];
  constructor() {
    let num = 100;//+prompt('How many plates?');
    this.antalPlader = Array(num).fill(0).map(() => this._generatePlateNumbers());
  }

  private _generatePlateNumbers(): number[][] {
    const a = [];
    this.numbers = [];
    for (let i = 0; i < 3; i++) {
      a.push(this._generateRow());
    }
    return a;
  }

  private _generateRow(): number[] {
    const row = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined];
    for (let i = 0; i < 5; i++) {
      const randomNum = Math.floor(Math.random() * 90) + 1;
      if (this.numbers.indexOf(randomNum) !== -1) {
        i--;
        continue;
      }
      let randomNumIdx = Math.floor(randomNum / 10);
      if (randomNumIdx === 9) {
        randomNumIdx = 8;
      }
      if (row[randomNumIdx] !== undefined) {
        i--;
      } else {
        row[randomNumIdx] = randomNum;
        this.numbers.push(randomNum);
      }
    }
    return row;
  }
}

import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  antalPlader = Array(80).fill(0).map(x => this._generatePlateNumbers());
  numbers = [];

  private _generatePlateNumbers() {
    const a = [];
    this.numbers = [];
    for (let i = 0; i < 3; i++) {
      a.push(this._generateRow());
    }
    return a;
  }

  private _generateRow() {
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

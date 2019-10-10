import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-plade',
  templateUrl: './plade.component.html',
  styleUrls: ['./plade.component.css']
})
export class PladeComponent implements OnInit {
  @Input() numbers;
  constructor() { }

  ngOnInit() {
  }

}

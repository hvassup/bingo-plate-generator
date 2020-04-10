import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-plade',
  templateUrl: './plade.component.html',
  styleUrls: ['./plade.component.scss']
})
export class PladeComponent implements OnInit {
  @Input() numbers: number[][];
  @Input() plateId: number;
  constructor() { }

  ngOnInit() {
  }
}

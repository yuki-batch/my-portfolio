import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-length-list-item',
  templateUrl: './length-list-item.component.html',
  styleUrls: ['./length-list-item.component.css']
})
export class LengthListItemComponent implements OnInit {

  @Input() title: string;
  @Input() text: string;
  @Input() percentNumber: number;

  constructor() {
  }

  ngOnInit() {
  }

}

import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-normal-list-table-item',
  templateUrl: './normal-list-table-item.component.html',
  styleUrls: ['./normal-list-table-item.component.css']
})
export class NormalListTableItemComponent implements OnInit {

  @Input() leftSideTitle: string;
  @Input() title: string;
  @Input() body: string;
  @Input() detail: string;

  constructor() {
  }

  ngOnInit() {
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {NormalListItem} from '../../entities/normal-list-item';

@Component({
  selector: 'app-normal-list-item',
  templateUrl: './normal-list-item.component.html',
  styleUrls: ['./normal-list-item.component.css']
})
export class NormalListItemComponent implements OnInit {

  @Input() item: NormalListItem;

  constructor() {
  }

  ngOnInit() {
    console.log(this.item);
  }

}

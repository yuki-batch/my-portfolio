import {Component, OnInit} from '@angular/core';
import {Program} from '../../entities/programming-experience';
import {Input} from '@angular/core';

@Component({
  selector: 'app-skill-length-list-item',
  templateUrl: './skill-length-list-item.component.html',
  styleUrls: ['./skill-length-list-item.component.css']
})
export class SkillLengthListItemComponent implements OnInit {

  @Input() skill: Program;
  public experienceMonth: string
  public percentNumber: number;

  constructor() {
  }

  ngOnInit() {
    // TODO: 経験の月数を計算と割合で算出
    this.experienceMonth = '36ヵ月';
    this.percentNumber = 100;
  }

}

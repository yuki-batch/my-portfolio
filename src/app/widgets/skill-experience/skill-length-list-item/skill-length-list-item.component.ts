import {Component, OnInit} from '@angular/core';
import {Input} from '@angular/core';
import {SkillExperience} from "../../../entities/skill-experience";

@Component({
  selector: 'app-skill-length-list-item',
  templateUrl: './skill-length-list-item.component.html',
  styleUrls: ['./skill-length-list-item.component.css']
})
export class SkillLengthListItemComponent implements OnInit {

  @Input() skill: SkillExperience;

  constructor() {
  }

  ngOnInit() {
  }

}

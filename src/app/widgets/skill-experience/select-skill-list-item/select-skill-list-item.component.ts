import {Component, Input, OnInit} from '@angular/core';
import {ProgramingExperienceService} from "../../../services/programing-experience.service";

@Component({
  selector: 'app-select-skill-list-item',
  templateUrl: './select-skill-list-item.component.html',
  styleUrls: ['./select-skill-list-item.component.css']
})
export class SelectSkillListItemComponent implements OnInit {

  @Input() language: string;

  constructor(
    public programingExperienceService: ProgramingExperienceService,
  ) {
  }

  ngOnInit() {
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {SkillProficieny} from "../../entities/skill-proficieny";
import {ProgramingExperienceService} from "../../services/programing-experience.service";

@Component({
  selector: 'app-star-list-item',
  templateUrl: './star-list-item.component.html',
  styleUrls: ['./star-list-item.component.css']
})
export class StarListItemComponent implements OnInit {

  @Input() skill: SkillProficieny

  get skillMessage() {
    return this.programingExperienceService.skillProficiencyComment(this.skill.skillLevel);
  }

  constructor(
    private programingExperienceService: ProgramingExperienceService
  ) {

  }

  ngOnInit() {
  }

}

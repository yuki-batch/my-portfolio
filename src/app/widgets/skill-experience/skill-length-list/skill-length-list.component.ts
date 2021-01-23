import {Component, Input, OnInit} from '@angular/core';
import {ProgramingExperienceService} from "../../../services/programing-experience.service";
import {SkillExperience} from "../../../entities/skill-experience";
import {ProgramingLanguage} from "../../../entities/programing-language";

@Component({
  selector: 'app-skill-length-list',
  templateUrl: './skill-length-list.component.html',
  styleUrls: ['./skill-length-list.component.css']
})
export class SkillLengthListComponent implements OnInit {

  @Input() selectLanguage: ProgramingLanguage[];
  public skillList: SkillExperience[];

  constructor(
    private programingExperienceService: ProgramingExperienceService
  ) {
  }

  ngOnInit() {
    this.skillList = this.programingExperienceService.convertSkillExperience();
  }

}

import {Component, OnInit} from '@angular/core';
import {SkillProficieny} from "../../../entities/skill-proficieny";
import {ProgramingExperienceService} from "../../../services/programing-experience.service";

@Component({
  selector: 'app-skill-proficiency-list',
  templateUrl: './skill-proficiency-list.component.html',
  styleUrls: ['./skill-proficiency-list.component.css']
})
export class SkillProficiencyListComponent implements OnInit {

  public skillProficiency: SkillProficieny[];

  constructor(
    private programingExperienceService: ProgramingExperienceService
  ) {
  }

  ngOnInit() {
    this.skillProficiency = this.programingExperienceService.convertSkillProficiency();
  }

}

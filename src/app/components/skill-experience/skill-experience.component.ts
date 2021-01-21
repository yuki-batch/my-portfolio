import {Component, OnInit} from '@angular/core';
import {ProgramingExperienceService} from "../../services/programing-experience.service";
import {ProgramingLanguage} from "../../entities/programing-language";

@Component({
  selector: 'app-skill-experience',
  templateUrl: './skill-experience.component.html',
  styleUrls: ['./skill-experience.component.css']
})
export class SkillExperienceComponent implements OnInit {

  public programingLanguageList: ProgramingLanguage[];
  public selectLanguage: ProgramingLanguage[];

  constructor(
    private programingExperienceService: ProgramingExperienceService,
  ) {
  }

  ngOnInit() {
    this.programingLanguageList = this.programingExperienceService.programingLanguageList();
    this.selectLanguage = this.programingExperienceService.programingLanguageList();
  }

  public onClickLanguage(language: ProgramingLanguage) {
    const indexNum = this.selectLanguage.indexOf(language);

    if (indexNum === -1) {
      this.selectLanguage.push(language);
    } else {
      this.selectLanguage.splice(indexNum, 1)
    }
  }

}

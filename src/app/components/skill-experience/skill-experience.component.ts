import {Component, OnInit} from '@angular/core';
import {ProgramingExperienceService} from "../../services/programing-experience.service";

@Component({
  selector: 'app-skill-experience',
  templateUrl: './skill-experience.component.html',
  styleUrls: ['./skill-experience.component.css']
})
export class SkillExperienceComponent implements OnInit {

  public programingLanguageList: string[];
  public selectLanguage: string[];

  constructor(
    private programingExperienceService: ProgramingExperienceService,
  ) {
  }

  ngOnInit() {
    this.programingLanguageList = this.programingExperienceService.programingLanguageList();
    this.selectLanguage = this.programingExperienceService.programingLanguageList();
  }

  public onClickLanguage(language: string) {
    const indexNum = this.selectLanguage.indexOf(language);

    if (indexNum === -1) {
      this.selectLanguage.push(language);
    } else {
      this.selectLanguage.splice(indexNum, 1)
    }
    console.log(this.selectLanguage);
  }

}

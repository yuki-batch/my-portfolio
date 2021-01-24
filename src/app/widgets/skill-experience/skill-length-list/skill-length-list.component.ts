import {Component, DoCheck, Input, IterableDiffer, IterableDiffers, OnInit} from '@angular/core';
import {ProgramingExperienceService} from "../../../services/programing-experience.service";
import {SkillExperience} from "../../../entities/skill-experience";

@Component({
  selector: 'app-skill-length-list',
  templateUrl: './skill-length-list.component.html',
  styleUrls: ['./skill-length-list.component.css']
})
export class SkillLengthListComponent implements OnInit, DoCheck {

  @Input() selectLanguage: string[];
  private _selectLanguage: string[] = [];
  public skillList: SkillExperience[];
  public filteredSkillList: SkillExperience[] = [];
  public selectLanguageDiffer: IterableDiffer<string>;

  constructor(
    private programingExperienceService: ProgramingExperienceService,
    private iterableDiffers: IterableDiffers
  ) {
  }

  ngOnInit() {
    this.skillList = this.programingExperienceService.convertSkillExperience();
    this.selectLanguageDiffer = this.iterableDiffers.find(this.selectLanguage).create();
  }

  ngDoCheck() {
    const selectLanguageChange = this.selectLanguageDiffer.diff(this.selectLanguage);
    if (selectLanguageChange) {
      selectLanguageChange.forEachAddedItem((record) => {
        this._selectLanguage.push(record.item);
      });

      selectLanguageChange.forEachRemovedItem((record) => {
        const removeIndex = this._selectLanguage.indexOf(record.item);
        this._selectLanguage.splice(removeIndex, 1);
      });

      this.filteringSkillList();
    }
  }

  private filteringSkillList() {
    this.filteredSkillList = this.skillList.filter((skill) => {
      return this._selectLanguage.some((lang) => {
        return lang === skill.skillName;
      });
    });
  }

}

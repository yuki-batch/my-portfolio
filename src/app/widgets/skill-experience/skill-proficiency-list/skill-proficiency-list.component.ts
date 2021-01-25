import {Component, DoCheck, Input, IterableDiffer, IterableDiffers, OnInit} from '@angular/core';
import {SkillProficieny} from "../../../entities/skill-proficieny";
import {ProgramingExperienceService} from "../../../services/programing-experience.service";

@Component({
  selector: 'app-skill-proficiency-list',
  templateUrl: './skill-proficiency-list.component.html',
  styleUrls: ['./skill-proficiency-list.component.css']
})
export class SkillProficiencyListComponent implements OnInit, DoCheck {

  @Input() selectLanguage: string[];
  private _selectLanguage: string[] = [];
  private skillProficiency: SkillProficieny[];
  public filteredSkillProficiency: SkillProficieny[] = [];
  public selectLanguageDiffer: IterableDiffer<string>;

  constructor(
    private programingExperienceService: ProgramingExperienceService,
    private iterableDiffers: IterableDiffers
  ) {
  }

  ngOnInit() {
    this.skillProficiency = this.programingExperienceService.convertSkillProficiency();
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

      this.filterdSkillProficiencyList();
    }
  }

  private filterdSkillProficiencyList() {
    this.filteredSkillProficiency = this.skillProficiency.filter((skill) => {
      return this._selectLanguage.some((lang) => {
        return lang === skill.skillName;
      });
    });
  }

}

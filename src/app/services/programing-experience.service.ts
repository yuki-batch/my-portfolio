import {Injectable} from '@angular/core';
import {ProgrammingExperience, skillLevel} from "../entities/programming-experience";
import {SkillExperience} from "../entities/skill-experience";
import {programingExperience} from '../../mocks/mock-programing-experience';
import {SkillProficieny} from "../entities/skill-proficieny";
import {Language} from "../entities/normal-list-item";

@Injectable({
  providedIn: 'root'
})
export class ProgramingExperienceService {

  constructor() {
  }

  private static programingExperience: ProgrammingExperience = programingExperience;


  public convertSkillExperience(): SkillExperience[] {
    return ProgramingExperienceService.programingExperience.skill.map((skill) => {
      const skillItem = new SkillExperience();
      skillItem.skillName = skill.name;

      const startDate = new Date(skill.startTerm);
      const endDate = !skill.endTerm ? new Date() : new Date(skill.endTerm);

      skillItem.skillExperienceMonth = ProgramingExperienceService.monthDiff(startDate, endDate);
      if (skillItem.skillExperienceMonth === 0) {
        skillItem.skillExperienceMonth = 0.5;
      }

      const maxExperienceMonth = ProgramingExperienceService.monthDiff(new Date(programingExperience.startTerm), new Date());
      skillItem.skillExperienceLengthPercent = skillItem.skillExperienceMonth / maxExperienceMonth * 100;

      return skillItem;
    });
  }

  public convertSkillProficiency(): SkillProficieny[] {
    return ProgramingExperienceService.programingExperience.skill.map((skill) => {
      const skillItem = new SkillProficieny();
      skillItem.skillName = skill.name;
      skillItem.skillLevel = skill.level;
      return skillItem;
    })
  }

  public skillProficiencyComment(skillLevel: skillLevel): Language {
    const message = new Language();
    switch (skillLevel) {
      case 1:
        message.ja = '触ったことがある';
        message.en = 'I\'ve touched it before';
        break;
      case 2:
        message.ja = '業務で経験している';
        message.en = 'Experienced in business';
        break;
      case 3:
        message.ja = '業務で経験しており、設計、実装可能';
        message.en = 'Experienced in business, can design and implement';
        break;
      case 4:
        message.ja = '業務で経験しており、設計、実装、提案、指導など一通りできる';
        message.en = 'Experienced in business and can design, implement, propose, and teach';
        break;
      case 5:
        message.ja = 'ちょっとわかる';
        message.en = 'Know a little';
        break;
      default:
    }

    return message;
  }

  private static monthDiff(dateFrom, dateTo) {
    return dateTo.getMonth() - dateFrom.getMonth() +
      (12 * (dateTo.getFullYear() - dateFrom.getFullYear()))
  }
}

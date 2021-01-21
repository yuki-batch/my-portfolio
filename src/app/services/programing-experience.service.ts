import {Injectable} from '@angular/core';
import {ProgrammingExperience} from "../entities/programming-experience";
import {SkillExperience} from "../entities/skill-experience";
import {programingExperience} from '../../mocks/mock-programing-experience';

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

  private static monthDiff(dateFrom, dateTo) {
    return dateTo.getMonth() - dateFrom.getMonth() +
      (12 * (dateTo.getFullYear() - dateFrom.getFullYear()))
  }
}

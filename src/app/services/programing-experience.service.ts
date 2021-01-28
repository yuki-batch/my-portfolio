import {Injectable} from '@angular/core';
import {ProgrammingExperience, skillLevel} from '../entities/programming-experience';
import {SkillExperience} from '../entities/skill-experience';
import {programingExperience} from '../../mocks/mock-programing-experience';
import {SkillProficieny} from '../entities/skill-proficieny';
import {Language} from '../entities/normal-list-item';

@Injectable({
  providedIn: 'root'
})
export class ProgramingExperienceService {

  constructor() {
  }

  private static programingExperience: ProgrammingExperience = programingExperience;


  private static monthDiff(dateFrom, dateTo) {
    return dateTo.getMonth() - dateFrom.getMonth() +
      (12 * (dateTo.getFullYear() - dateFrom.getFullYear()));
  }

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
    });
  }

  public skillProficiencyComment(skillLevelNumber: skillLevel): Language {
    const message = new Language();
    switch (skillLevelNumber) {
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

  public programingLanguageList(): string[] {
    return ProgramingExperienceService.programingExperience.skill.map((skill) => {
      return skill.name;
    });
  }

  public programingLanguageIcon(language: string): string {
    switch (language) {
      case 'Angular':
        return './assets/img/angular-icon.svg';
      case 'TypeScript':
        return './assets/img/typescript-icon.svg';
      case 'AngularJS':
        return './assets/img/angularjs-iconjpg.jpg';
      case 'JavaScript':
        return './assets/img/javascript-icon.svg';
      case 'Postgres SQL':
        return './assets/img/postgresql.svg';
      case 'jQuery':
        return './assets/img/jquery.svg';
      case 'Flutter':
        return './assets/img/flutter.svg';
      case 'Firebase':
        return './assets/img/firebase.svg';
      case 'PHP':
        return './assets/img/php.svg';
      case 'CakePHP':
        return './assets/img/cakephp-icon.svg';
      case 'HTML':
        return './assets/img/html-5.svg';
      case 'CSS':
        return './assets/img/css-3.svg';
      //  icon違う
      case 'SCSS':
        return './assets/img/sass.svg';
      case 'Vue.js':
        return './assets/img/vue.svg';
      case 'Flutter for web':
        return './assets/img/flutter.svg';
      case 'Adobe XD':
        return './assets/img/icon-xd.svg';
      case 'C':
        return './assets/img/C_Programming_Language_logo.svg.png';
      case 'Java':
        return './assets/img/java.svg';
      case 'Node.js':
        return './assets/img/nodejs.svg';
    }
  }
}

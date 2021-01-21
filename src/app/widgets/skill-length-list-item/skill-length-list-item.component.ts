import {Component, OnInit} from '@angular/core';
import {Program} from '../../entities/programming-experience';
import {Input} from '@angular/core';

@Component({
  selector: 'app-skill-length-list-item',
  templateUrl: './skill-length-list-item.component.html',
  styleUrls: ['./skill-length-list-item.component.css']
})
export class SkillLengthListItemComponent implements OnInit {

  @Input() skill: Program;
  @Input() firstStartTerm: string;
  public experienceMonth: number;
  public percentNumber: number;

  constructor() {
  }

  ngOnInit() {
    const startDate = new Date(this.skill.startTerm);
    const endDate = !this.skill.endTerm ? new Date() : new Date(this.skill.endTerm);
    this.experienceMonth = SkillLengthListItemComponent.monthDiff(startDate, endDate);
    if (this.experienceMonth === 0) {
      this.experienceMonth = 0.5;
    }

    const maxExperienceMonth = SkillLengthListItemComponent.monthDiff(new Date(this.firstStartTerm), new Date());
    this.percentNumber = this.experienceMonth / maxExperienceMonth * 100;
  }

  private static monthDiff(dateFrom, dateTo) {
    return dateTo.getMonth() - dateFrom.getMonth() +
      (12 * (dateTo.getFullYear() - dateFrom.getFullYear()))
  }

}

import {Component, OnInit} from '@angular/core';
import {ProgrammingExperience} from "../../entities/programming-experience";
import {programingExperience} from '../../../mocks/mock-programing-experience'

@Component({
  selector: 'app-skill-experience',
  templateUrl: './skill-experience.component.html',
  styleUrls: ['./skill-experience.component.css']
})
export class SkillExperienceComponent implements OnInit {

  public programingExperience: ProgrammingExperience = programingExperience;

  constructor() {
  }

  ngOnInit() {
  }

}

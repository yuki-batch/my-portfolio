import {Component, OnInit} from '@angular/core';
import {BasicInformation} from "../../entities/basic-information";
import {basicInformation} from '../../../mocks/mock-basic-information'

@Component({
  selector: 'app-basic-information',
  templateUrl: './basic-information.component.html',
  styleUrls: ['./basic-information.component.css']
})
export class BasicInformationComponent implements OnInit {

  public basicInformation: BasicInformation;

  constructor() {
  }

  ngOnInit() {
    this.basicInformation = basicInformation;
  }

}

import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {

  public works = [{
    "leftSideTitle": "<img width='200px'  src='./assets/img/works_site.png' alt='サイトイメージ'>",
    "title": "ポートフォリオサイト",
    "body": "現在ご覧頂いているポートフォリオサイトです。<br><a href=\"https://github.com/yuki-batch/my-portfolio\" target=\"_blank\">Git hub Page</a>",
    "detail": "Angular, HTML, CSS",
  },
    {
      "leftSideTitle": "<img width='180px'  src='./assets/img/mono_chrome.png' alt='サイトイメージ'>",
      "title": "mono Chrome",
      "body": "Chromeでモノクロ表示をさせる拡張機能。<br><a href=\"https://github.com/yuki-batch/mono-chrome\" target=\"_blank\">Git hub Page</a>",
      "detail": "JavaScript, HTML, CSS",
    }]

  constructor() {
  }

  ngOnInit() {
  }

}

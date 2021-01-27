import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SiteHeaderComponent} from './widgets/site-header/site-header.component';
import {BasicInformationComponent} from './components/basic-information/basic-information.component';
import {NormalListItemComponent} from './widgets/normal-list-item/normal-list-item.component';
import {AppRoutingModule} from './app-routing.module';
import {SkillExperienceComponent} from './components/skill-experience/skill-experience.component';
import {LengthListItemComponent} from './widgets/length-list-item/length-list-item.component';
import {StarListItemComponent} from './widgets/star-list-item/star-list-item.component';
import {CareerComponent} from './components/career/career.component';
import {NormalListTableItemComponent} from './widgets/normal-list-table-item/normal-list-table-item.component';
import {SiteFooterComponent} from './widgets/site-footer/site-footer.component';
import {SkillLengthListItemComponent} from './widgets/skill-experience/skill-length-list-item/skill-length-list-item.component';
import {SkillLengthListComponent} from './widgets/skill-experience/skill-length-list/skill-length-list.component';
import {SkillProficiencyListComponent} from './widgets/skill-experience/skill-proficiency-list/skill-proficiency-list.component';
import {SelectSkillListItemComponent} from './widgets/skill-experience/select-skill-list-item/select-skill-list-item.component';
import {WorksComponent} from './components/works/works.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
    BasicInformationComponent,
    NormalListItemComponent,
    SkillExperienceComponent,
    LengthListItemComponent,
    StarListItemComponent,
    CareerComponent,
    NormalListTableItemComponent,
    SiteFooterComponent,
    SkillLengthListItemComponent,
    SkillLengthListComponent,
    SkillProficiencyListComponent,
    SelectSkillListItemComponent,
    WorksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

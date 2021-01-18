import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SiteHeaderComponent} from './components/site-header/site-header.component';
import {BasicInformationComponent} from './components/basic-information/basic-information.component';
import {NormalListItemComponent} from './widgets/normal-list-item/normal-list-item.component';
import {AppRoutingModule} from './app-routing.module';
import {SkillExperienceComponent} from './components/skill-experience/skill-experience.component';
import {LengthListItemComponent} from './widgets/length-list-item/length-list-item.component';
import {StarListItemComponent} from './widgets/star-list-item/star-list-item.component';
import {CareerComponent} from './components/career/career.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

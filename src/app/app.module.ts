import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SiteHeaderComponent} from './components/site-header/site-header.component';
import {BasicInformationComponent} from './components/basic-information/basic-information.component';
import {NormalListComponent} from './widgets/normal-list/normal-list.component';
import {AppRoutingModule} from './app-routing.module';
import {SkillExperienceComponent} from './components/skill-experience/skill-experience.component';
import {ItemLengthListComponent} from './widgets/item-length-list/item-length-list.component';
import {ItemStarListComponent} from './widgets/item-star-list/item-star-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
    BasicInformationComponent,
    NormalListComponent,
    SkillExperienceComponent,
    ItemLengthListComponent,
    ItemStarListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

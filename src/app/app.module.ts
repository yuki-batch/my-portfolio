import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SiteHeaderComponent } from './components/site-header/site-header.component';
import { BasicInformationComponent } from './components/basic-information/basic-information.component';
import { NormalListComponent } from './widgets/normal-list/normal-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
    BasicInformationComponent,
    NormalListComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

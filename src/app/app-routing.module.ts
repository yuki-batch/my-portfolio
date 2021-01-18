import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BasicInformationComponent} from './components/basic-information/basic-information.component';
import {SkillExperienceComponent} from "./components/skill-experience/skill-experience.component";

const routes: Routes = [
  {path: '', redirectTo: '/basic-information', pathMatch: 'full'},
  {path: 'basic-information', component: BasicInformationComponent},
  {path: 'skill-experience', component: SkillExperienceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

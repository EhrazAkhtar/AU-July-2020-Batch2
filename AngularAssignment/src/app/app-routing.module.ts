import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AdmFormComponent } from './adm-form/adm-form.component';
import { DisFormComponent } from './dis-form/dis-form.component';
import { AngularNotesComponent } from './angular-notes/angular-notes.component';

const routes: Routes = [

  { path: 'home', component: HomePageComponent},
  { path: 'page1', component: AdmFormComponent},
  { path: 'page2', component: DisFormComponent},
  { path: 'page3', component: AngularNotesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

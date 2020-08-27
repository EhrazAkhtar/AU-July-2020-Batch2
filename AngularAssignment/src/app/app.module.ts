import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AdmFormComponent } from './adm-form/adm-form.component';
import { DisFormComponent } from './dis-form/dis-form.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AngularNotesComponent } from './angular-notes/angular-notes.component';
import { FetchDataService } from './fetch-data.service'

@NgModule({
  declarations: [
    AppComponent,
    AdmFormComponent,
    DisFormComponent,
    HomePageComponent,
    AngularNotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [FetchDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

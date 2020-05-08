import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CandidatesComponent } from './components/candidates/candidates.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UrnaComponent } from './components/urna/urna.component';

// import {environment} from '../environments/environment';

// Firebase
// import {AngularFireDatabaseModule} from '@angular/fire/database';
// import {AngularFireModule} from '@angular/fire';

// Components
import { ElectionCardComponent } from './components/candidates/card/card.component';
import { SelectedCandidateComponent } from './components/candidates/selected-candidate/selected-candidate.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CandidatesComponent,
    HeaderComponent,
    UrnaComponent,
    ElectionCardComponent,
    SelectedCandidateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

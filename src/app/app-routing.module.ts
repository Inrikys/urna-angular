import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UrnaComponent } from './components/urna/urna.component';
import { CandidatesComponent } from './components/candidates/candidates.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'urna', component: UrnaComponent},
  {path: 'candidates', component: CandidatesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

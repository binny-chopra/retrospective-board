import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsOnboardComponent } from './cards-onboard/cards-onboard.component';

const routes: Routes = [
  { path: '', component: CardsOnboardComponent },
  { path: '**', component: CardsOnboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

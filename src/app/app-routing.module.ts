import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisorComponent } from './visor/visor.component';

const routes: Routes = [
  { path: 'visor', component: VisorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

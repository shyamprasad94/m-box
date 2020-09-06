import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RBoxComponent } from './r-box/r-box.component';

const routes: Routes = [
  {path:'',component:RBoxComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

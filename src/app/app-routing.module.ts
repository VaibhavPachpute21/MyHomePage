import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OldhomeComponent } from './oldhome/oldhome.component';

const routes: Routes = [
  {path:"",component:OldhomeComponent},
  {path:"newHome",component:HomeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

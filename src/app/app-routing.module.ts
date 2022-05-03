import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OldhomeComponent } from './oldhome/oldhome.component';
import { ThanksComponent } from './thanks/thanks.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"thankyou!",component:ThanksComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

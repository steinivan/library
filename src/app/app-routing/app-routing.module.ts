import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BeginningComponent } from '../component/beginning/beginning.component';
import { SignComponent } from '../vista1/sign/sign.component';
const routes: Routes = [
  {path:'beginning',component:BeginningComponent},
  {path:'sign',component:SignComponent},

];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }

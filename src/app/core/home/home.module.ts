import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHomeComponent } from './main-home/main-home.component';
import { Routes, RouterModule } from '@angular/router';


@NgModule({
  imports: [ RouterModule.forChild([
    { path: '', component: MainHomeComponent }
  ]),
    CommonModule
  ],
  declarations: [MainHomeComponent],
  exports: [RouterModule]
})
export class HomeModule { }

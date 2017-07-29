import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPanelComponent } from './main-panel/main-panel.component';
import { Routes, RouterModule } from '@angular/router';

@NgModule({
  imports: [ RouterModule.forChild([
    { path: '', component: MainPanelComponent }
  ]),
    CommonModule
  ],
  declarations: [MainPanelComponent]
})
export class AdminPanelModule { }

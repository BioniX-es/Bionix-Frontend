import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPanelComponent } from './main-panel/main-panel.component';
import { Routes, RouterModule } from '@angular/router';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';

@NgModule({
  imports: [ RouterModule.forChild([
    { path: '', component: MainPanelComponent }
  ]),
    CommonModule
  ],
  declarations: [MainPanelComponent, NavbarAdminComponent]
})
export class AdminPanelModule { }

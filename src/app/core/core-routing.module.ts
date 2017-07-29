import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandScapeComponent } from "app/core/land-scape/land-scape.component";

export const routes: Routes = [
  {path: '', pathMatch: 'full', component: LandScapeComponent},
  { path: 'admin-panel', loadChildren: 'app/core/admin-panel/admin-panel.module.ts#AdminPanelModule' },
  { path: 'home', loadChildren: 'app/core/home/home.module.ts#HomeModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandScapeComponent } from "app/core/land-scape/land-scape.component";
import { AuthGuard } from "app/shared";
import { MainPanelComponent } from "app/core/admin-panel";

export const routes: Routes = [
  {path: '', pathMatch: 'full', component: LandScapeComponent},
  {path: 'admin-panel', component: MainPanelComponent, canActivate: [AuthGuard]},
  { path: 'home', loadChildren: 'app/core/home/home.module.ts#HomeModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
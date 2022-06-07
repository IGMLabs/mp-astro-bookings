import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TripsPage } from './trips.page';
import { NewTripModule } from './new-trip/new-trip.module';

const routes: Routes = [{ path: '', component: TripsPage }, { path: 'trip/new-trip', loadChildren: () => import('./new-trip/new-trip.module').then(m => m.NewTripModule)},
{ path: 'trip/:id', loadChildren: () => import('./trip/trip.module').then(m => m.TripModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TripsRoutingModule { }

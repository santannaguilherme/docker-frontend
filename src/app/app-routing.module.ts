import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './modules/containers/components/container-component/container.component';
import { ContainerCreateComponent } from './modules/containers/components/container-create-component/containerCreate.component';
import { MaintenanceComponent } from './modules/maintanance/components/maintenance-component/maintenance.component';
import { MaintenanceCreateComponent } from './modules/maintanance/components/maintenance-create-component/maintenanceCreate.component';
import { MaintenanceEditComponent } from './modules/maintanance/components/maintenance-edit-component/maintenanceEdit.component';
import { MeasurementsComponent } from './modules/measurements/components/measurement-component/measurements.component';
import { MeasurementsCreateComponent } from './modules/measurements/components/measurement-create-component/measurementsCreate.component';
import { MeasurementsEditComponent } from './modules/measurements/components/measurement-edit-component/measurementsEdit.component';

const routes: Routes = [
  { path: 'show-containers', component: ContainerComponent },
  { path: 'create-container', component: ContainerCreateComponent },
  { path: 'delete-container', component: MeasurementsEditComponent },
  { path: 'delete-all-containers', component: MeasurementsComponent },
  { path: 'show-images', component: ContainerCreateComponent },
  { path: 'pull-image', component: MaintenanceComponent },
  { path: 'delete-image', component: MaintenanceComponent },
  { path: 'delete-all-images', component: MaintenanceCreateComponent },
  { path: '', component: ContainerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

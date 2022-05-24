import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './modules/containers/components/container-component/container.component';
import { ContainerCreateComponent } from './modules/containers/components/container-create-component/containerCreate.component';
import { ImageComponent } from './modules/images/components/container-component/image.component';
import { ImageCreateComponent } from './modules/images/components/container-create-component/imageCreate.component';

const routes: Routes = [
  { path: 'show-containers', component: ContainerComponent },
  { path: 'create-container', component: ContainerCreateComponent },
  { path: 'show-images', component: ImageComponent },
  { path: 'pull-image', component: ImageCreateComponent },
  { path: '', component: ContainerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

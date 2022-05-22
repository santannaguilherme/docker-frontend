import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Store } from 'src/app/core/models/store';
import { Container } from '../../models/container';
import { ContainerApiService } from './container-api.service';

@Injectable({
  providedIn: 'root',
})
export class ContainerApiStoreService extends Store<Container[]> {
  constructor(private api: ContainerApiService) {
    super([]);
  }

  listContainer(): Promise<Container[]> {
    return this.api.getContainer().toPromise();
  }

  saveContainer(container: Container) {
    return this.api.saveContainer(container);
  }

  getContainerById(id: number): Promise<Container> {
    return this.api.getContainerById(id).toPromise();
  }
  deleteContainerById(id: number) {
    return this.api.deleteContainer(id).subscribe();
  }
}

import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Store } from 'src/app/core/models/store';
import { Image } from '../../models/image';
import { ImageApiService } from './image-api.service';

@Injectable({
  providedIn: 'root',
})
export class ImageApiStoreService extends Store<Image[]> {
  constructor(private api: ImageApiService) {
    super([]);
  }

  listImage(): Promise<Image[]> {
    return this.api.getImage().toPromise();
  }

  saveImage(image: Image) {
    return this.api.saveImage(image);
  }

  getImageById(id: number): Promise<Image> {
    return this.api.getImageById(id).toPromise();
  }
  deleteImageById(id: number) {
    return this.api.deleteImage(id).subscribe();
  }
}

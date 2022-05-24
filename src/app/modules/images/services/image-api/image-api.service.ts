import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Image } from '../../models/image';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ImageApiService {
  
  url = environment.api + '/Images';
  constructor(private http: HttpClient) {}

  getImage() {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
    });
    let options = { headers: httpHeaders };
    return this.http.get<Image[]>(this.url);
  }
  getImageById(id: number) {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
    });
    let options = { headers: httpHeaders };
    let params = new HttpParams();
    params = params.append('id', id);
    return this.http.get<Image>(this.url + '/'+id);
  }
  saveImage(image: Image): Promise<Image> {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
    });
    let options = { headers: httpHeaders };
    return this.http.post<Image>(this.url, image).toPromise();
  }

  deleteImage(id: number): Promise<Image> {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
    });
    let options = { headers: httpHeaders };
    return this.http.delete<Image>(this.url + '/'+id).toPromise();
  }
  deleteImages():Promise<Image> {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
    });
    let options = { headers: httpHeaders };
    return this.http.delete<Image>(this.url).toPromise();
  }
}

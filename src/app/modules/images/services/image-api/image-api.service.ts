import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Image } from '../../models/image';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ImageApiService {
  url = environment.api + '/Image';
  constructor(private http: HttpClient) {}

  getImage() {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
    });
    let options = { headers: httpHeaders };
    return this.http.get<Image[]>(this.url,options);
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
  saveImage(image: Image): Observable<Image> {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
    });
    let options = { headers: httpHeaders };
    return this.http.post<Image>(this.url, image, options);
  }

  deleteImage(id: number): Observable<Image> {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
    });
    let options = { headers: httpHeaders };
    return this.http.delete<Image>(this.url + '/'+id, options);
  }
}

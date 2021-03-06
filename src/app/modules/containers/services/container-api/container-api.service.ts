import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Container } from '../../models/container';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContainerApiService {
  url = environment.api + '/Containers';
  constructor(private http: HttpClient) {}

  getContainer() {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
    });
    let options = { headers: httpHeaders };
    return this.http.get<Container[]>(this.url);
  }
  getContainerById(id: number) {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
    });
    let options = { headers: httpHeaders };
    let params = new HttpParams();
    params = params.append('id', id);
    return this.http.get<Container>(this.url + '/'+id);
  }
  saveContainer(container: Container): Promise<Container> {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
    });
    let options = { headers: httpHeaders };
    return this.http.post<Container>(this.url, container).toPromise();
  }

  deleteContainer(id: number): Promise<Container> {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
    });
    let options = { headers: httpHeaders };
    return this.http.delete<Container>(this.url + '/'+id).toPromise();
  }

  deleteAll():Promise<Container> {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
    });
    let options = { headers: httpHeaders };
    return this.http.delete<Container>(this.url).toPromise();
  }
}

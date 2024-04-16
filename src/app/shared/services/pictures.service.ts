import { Observable } from 'rxjs';
import { API_URL } from '../constants';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreatePicture, GetPicture } from '../../components/pictures/picture.model';


@Injectable({
  providedIn: 'root'
})

export class PicturesService {
  constructor(private http: HttpClient) {}

  getImages(): Observable<any> {
    return this.http.get<GetPicture[]>(`${API_URL}pictures`);
  }

  getImage(id: string): Observable<any> {
    return this.http.get<GetPicture>(`${API_URL}pictures/${id}`);
  }

  postImage(imageObject: any): Observable<any> {
    return this.http.post<CreatePicture>(`${API_URL}pictures`, imageObject);
  }

  editImage(data: any): Observable<any> {
    debugger;
    return this.http.put<CreatePicture>(`${API_URL}pictures/${data.id}`, data.formData);
  }

  deleteImage(id: string): Observable<any> {
    return this.http.delete(`${API_URL}pictures/${id}`);
  }
}

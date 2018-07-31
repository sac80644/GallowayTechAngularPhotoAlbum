import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html'
})
export class PhotoDetailComponent {
  public photos: Photo[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    //http.get<Photo[]>(baseUrl + 'api/Photo/GetPhotos').subscribe(result => {
    http.get<Photo[]>('http://localhost:64708/api/Photos/{id}/size/Full').subscribe(result => {
      this.photos = result;
    }, error => console.error(error));
  }
}

interface Photo {
  caption: string;
}

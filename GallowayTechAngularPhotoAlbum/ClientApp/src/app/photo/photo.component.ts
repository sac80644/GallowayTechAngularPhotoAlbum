import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html'
})
export class PhotoComponent {
  public photos: Photo[];
  public fullPhotos: IFullPhoto[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    //http.get<Photo[]>(baseUrl + 'api/Photo/GetPhotos').subscribe(result => {
    http.get<Photo[]>('http://localhost:64708/api/Photos/Thumb').subscribe(result => {
      this.photos = result;
    }, error => console.error(error));

    http.get<IFullPhoto[]>('http://localhost:64708/api/Photos/Full').subscribe(result => {
        this.fullPhotos = result;
      },
      error => console.error(error));
  }
}

interface Photo {
  caption: string;
}

interface IFullPhoto {
  URL: string;
}

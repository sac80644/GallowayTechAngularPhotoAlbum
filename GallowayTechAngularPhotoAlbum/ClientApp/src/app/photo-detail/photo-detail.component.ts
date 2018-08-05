import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiClient } from '../../core/ApiClient';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html'
})

export class PhotoDetailComponent {
  public photos: IPhoto[];
  public fullPhotos: IFullPhoto[];
  
  constructor(http: HttpClient)
  {
    var baseUrl = environment.apiUrl;
    http.get<IPhoto[]>(baseUrl + 'Photos/Thumb').subscribe(result =>
    {
      this.photos = result;
    }, error => console.error(error));

    http.get<IFullPhoto[]>(baseUrl + 'Photos/Full').subscribe(result =>
    {
      this.fullPhotos = result;
    }, error => console.error(error));
  }
}

interface IPhoto {
  caption: string;
}

interface IFullPhoto {
  
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Slider } from '../model/slider';

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  private restUrl = 'http://localhost:8080/oxygen-rest/rest/'

  constructor(private http: HttpClient) { }

  getSliders() : Observable<any> {
    return this.http.get(this.restUrl+'sliders');
  }
}

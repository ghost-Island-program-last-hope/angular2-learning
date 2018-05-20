import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class missionService {

  public url = 'http://www.ishareget.org/api/mission'
  constructor(
    private http:Http
  ) {}

  public getMission(){
    return this.http.get(this.url).pipe(map(response =>{
      return response.json();
    }))
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GraphicsService {

  constructor(private http: HttpClient) { }

  getSocialNetworkUsers() {
    return this.http.get('http://localhost:3000/grafica');
  }

  getSocialNetworkUsersDonaData() {
    return this.getSocialNetworkUsers().pipe(
      delay(1500),
      map( data => {
        const labels = Object.keys(data);
        const values = Object.values(data);
        return { labels, values};
      })
    );
  }
  
}

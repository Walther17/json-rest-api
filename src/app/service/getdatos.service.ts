import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetdatosService {

  constructor(public httpclient: HttpClient) {

   }

   
   getDatos<T> (url: string) {

    // Llamamos a la Api
    url = 'https://jsonplaceholder.typicode.com/posts';
    console.log('url')
    return this.httpclient.get<T[]>(url);
  }

}

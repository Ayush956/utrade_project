import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class JsonservicesService {

  constructor(private http:HttpClient) { }
  getjsondata(val:string){
    const url="https://api.stockdata.org/v1/data/quote?symbols="+ val +"&api_token=uxnHge6pKBpKNk0c7hP2oQfN2X7QCNIq07boONuI";
    return this.http.get(url);
  }


}

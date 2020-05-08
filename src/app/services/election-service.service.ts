import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ElectionService {

  constructor(private http: HttpClient) { }
  
  url_base = 'http://localhost:3000/'

  async getElections(){
    const url = this.url_base + 'urna/election'; 
    return this.http.get(url).toPromise();
  }

  async getElectionByNumber(number){
    const url = this.url_base + 'urna/election/number/' + number; 
    return this.http.get(url).toPromise().catch( error => {
      console.log(error);
    });
  }

}
  
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class JournalServiceService {
 BASE_URL: string = 'http://localhost:3000';
  constructor(private http: Http) { }

  getEntries() {
    return this.http.get(`${this.BASE_URL}/api/journal-entries`)
      .map((res) => res.json())
  }
  getSingleEntry(id){
    return this.http.get(`${this.BASE_URL}/api/journal-entries/${id}`)
      .map((res) => res.json())
  }
}

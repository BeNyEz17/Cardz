import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {Cardz} from "../../shared/types/cardz";

@Injectable({
  providedIn: 'root',
})
export class CardzService {

  constructor(private http: HttpClient) {}

  getCardzById(id: number): Observable<Cardz> {
    return this.http.get<Cardz>(`http://localhost:3000/cardz/${id}`);
  }

  getAllCardz(): Observable<Cardz[]>{
    return this.http.get<Cardz[]>('http://localhost:3000/cardz/');
  }

  deleteCardzById(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/cardz/${id}`);
  } 
}

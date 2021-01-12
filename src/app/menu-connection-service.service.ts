import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Menu } from './types';

@Injectable({
  providedIn: 'root'
})
export class MenuConnectionServiceService {

  constructor(private _http: HttpClient) { }

  fetchMenuFromBackend(): Observable<any>{
    return this._http.get<any>("http://localhost:8085/getmenulist");
  }

  addFoodToMenu(menu: Menu): Observable<any>{
    return this._http.post<any>("http://localhost:8085/addmenu", menu);
  }

  fetchMenuById(id: string): Observable<any>{
    return this._http.get<any>("http://localhost:8085/getmenubyid/"+id);
  }

  deleteMenuById(id: string): Observable<any>{
    return this._http.delete<any>("http://localhost:8085/deletemenubyid/"+id);
  }




}

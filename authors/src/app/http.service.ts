import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAllAuthors(){
    return this._http.get("/showAll");
  }

  newAuthor(addAuthor){
    return this._http.post("/add",addAuthor);
  }

  deleteAuthor(id){
    return this._http.delete(`/destroy/${id}`);
  }

  editAuthor(id, editAuthor){
    return this._http.put(`/edit/${id}`,editAuthor);
  }

  getAuthor(id){
    return this._http.get(`/showOne/${id}`);
  }

}


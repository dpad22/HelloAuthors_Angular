import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  authors = [];
  addAuthor: any;
  error = "";

  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    this.getAuthorsFromService();
    this.addAuthor = {name:""};
  }
  getAuthorsFromService(){
    let observable = this._httpService.getAllAuthors();
    observable.subscribe((data) => {
      this.authors = data["data"];
    });
  }

  onSubmit(){
    let observable = this._httpService.newAuthor(this.addAuthor);
    observable.subscribe((data) => {
      this.getAuthorsFromService();
      console.log(data)
      console.log(this.addAuthor)
      this._router.navigate(["authors"]);
    });
  }

}

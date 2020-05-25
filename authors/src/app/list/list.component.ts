import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  authors: any = [];

  constructor(private _httpService: HttpService, private router: Router) { }

  ngOnInit() {
    this.getAuthorsFromService();
  }
  getAuthorsFromService() {
    let observable = this._httpService.getAllAuthors();
    observable.subscribe((data) => {
      this.authors = data;
    });
  }
  onDelete(id) {
    const observable = this._httpService.deleteAuthor(id);
    observable.subscribe((data) => {
      this.router.navigate([""]);
    });
  }

}

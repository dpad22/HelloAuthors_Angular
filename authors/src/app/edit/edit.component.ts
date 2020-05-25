import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  id = "";
  authorData: any;
  editAuthor: any;
  error = "";
  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    this.getOneAuthor();
    this.editAuthor = { name: ""}
  }
  getOneAuthor() {
    let observable = this._httpService.getAuthor(this.id);
    observable.subscribe((data) => {
      this.authorData = data;
    });
  }

  onEdit() {
    let observable = this._httpService.editAuthor(this.id, this.editAuthor);
    observable.subscribe((data) => {
      this.getOneAuthor();
      this._router.navigate(["authors"]);
    });
  }

}

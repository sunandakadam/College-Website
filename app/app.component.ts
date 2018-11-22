import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AdminPortal';
  url = "";
  constructor(private _r: Router , private _ar: ActivatedRoute) {

  }

  ngOnInit() {
    this.url = this._r.url   ;
  }
}

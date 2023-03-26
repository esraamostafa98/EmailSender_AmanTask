import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnChanges {
  isLogin: boolean;
  constructor() {}
  ngOnChanges() {}
  ngOnInit(): void {}
}

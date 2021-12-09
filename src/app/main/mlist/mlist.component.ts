import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mlist',
  templateUrl: './mlist.component.html',
  styleUrls: ['./mlist.component.css', '../../app.component.css'],
})
export class MlistComponent implements OnInit {
  @Input()
  displayList;

  constructor() {}

  ngOnInit(): void {}
}

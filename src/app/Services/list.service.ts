import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export class ListService {
  private listSource = new Subject<any>();

  listObservable$ = this.listSource.asObservable();

  setList(list: any) {}
  getList() {}
}

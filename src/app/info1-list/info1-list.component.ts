import { Component, OnInit } from '@angular/core';
import { infoType } from '../entity/infoType';
import { Service1Service } from '../serv/service1.service';


@Component({
  selector: 'app-info1-list',
  templateUrl: './info1-list.component.html',
  styleUrls: ['./info1-list.component.css' ]
})
export class Info1ListComponent implements OnInit {

  info: infoType[];
  displayedColumns: string[] = ['ParentTitle', 'Title'];

  constructor(private _info:Service1Service) {}

  ngOnInit(): void {
    this._info.findAll().subscribe(result => {
      console.log('result', result);
      this.info = result.value;

      
    });
  }

}

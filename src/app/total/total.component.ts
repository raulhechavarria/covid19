import { Component, OnInit } from '@angular/core';
import { Covid19Service } from '../serv/covid19.service';
import { IGlobal} from '../entity/Global';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent implements OnInit {
  global : IGlobal;
  constructor(private _info:Covid19Service) { }

  ngOnInit(): void {

    this._info.findAll().subscribe(result => {     
       this.global = result.Global;
       console.log('result in global', this.global);
     });


  }

}

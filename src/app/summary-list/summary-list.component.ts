import { Component, OnInit } from '@angular/core';
import { Covid19Service } from '../serv/covid19.service';
import { Summary } from '@angular/compiler';
import { ISummary } from '../entity/Summary';
import { ICountry } from '../entity/Country';
import { IGlobal} from '../entity/Global';

@Component({
  selector: 'app-summary-list',
  templateUrl: './summary-list.component.html',
  styleUrls: ['./summary-list.component.css']
})
export class SummaryListComponent implements OnInit {

  summ: ISummary;
  date: Date
  displayedColumns: string[] = ['Country', 'NewConfirmed','NewRecovered','NewDeaths'];
  countries : ICountry[];
  CountriesTemplate : ICountry[];
  global : IGlobal;
  constructor(private _info:Covid19Service) {}

  ngOnInit(): void {
    this.CountriesTemplate = [];
    this._info.findAll().subscribe(result => {     
     this.date = result.Date
      this.countries = result.Countries;
      this.global = result.Global;
      console.log('result in countries', result);
      //console.log('paises', this.Countries);

      this.countries.forEach(countrie => {
        if (countrie.NewConfirmed > 0) {
          this.CountriesTemplate.push(countrie);
        }
      });
      this.countries = this.CountriesTemplate;
      this.countries.sort((a, b) =>  b.NewConfirmed - a.NewConfirmed)
    });

  }
}

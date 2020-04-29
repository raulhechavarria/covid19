import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { Covid19Service } from '../serv/covid19.service';
import { ICountry } from '../entity/Country';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';





@Component({
  selector: 'app-chart-countries',
  templateUrl: './chart-countries.component.html',
  styleUrls: ['./chart-countries.component.css']
})
export class ChartCountriesComponent implements OnInit {

  date: Date
  countries : ICountry[];
  CountriesTemplate : ICountry[];
  data: number[];
  dataRecover: number[];
  barChartLabels: Label[];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  count : number = 0;

  barChartData: ChartDataSets[]; 




  constructor(private _info:Covid19Service) { }

  ngOnInit() {
    this.CountriesTemplate = [];
    this.barChartLabels = [];
    this.barChartData = [];
    this.data = [];
    this.dataRecover = [];
    this.count = 0;
    this._info.findAll().subscribe(result => {     
       this.countries = result.Countries;
       this.date = result.Date;
       console.log('result in countries', result);
      
       this.countries.forEach(countrie => {
       
         if (countrie.NewConfirmed > 0) {
           this.CountriesTemplate.push(countrie);
         }
        
       });
       console.log('10 countries', this.CountriesTemplate);
       this.countries = this.CountriesTemplate;
       this.countries.sort((a, b) =>  b.NewConfirmed - a.NewConfirmed)
       
       this.countries.some(c => {
        this.count ++ ;
        this.barChartLabels.push(c.Country);
        this.data.push(c.NewConfirmed);
        this.dataRecover.push(c.NewRecovered)
        if (this.data.length > 10) {
          return true;
        }
      });

      this.barChartData = [{ data: this.data , label: 'New cases' },
      { data: this.dataRecover , label: 'New Recovered' }];


     });
  }

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  
}

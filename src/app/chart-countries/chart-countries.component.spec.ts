import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartCountriesComponent } from './chart-countries.component';

describe('ChartCountriesComponent', () => {
  let component: ChartCountriesComponent;
  let fixture: ComponentFixture<ChartCountriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartCountriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

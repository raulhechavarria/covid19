import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryList1Component } from './summary-list1.component';

describe('SummaryList1Component', () => {
  let component: SummaryList1Component;
  let fixture: ComponentFixture<SummaryList1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryList1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryList1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

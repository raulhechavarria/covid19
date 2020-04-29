import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Info1ListComponent } from './info1-list.component';

describe('Info1ListComponent', () => {
  let component: Info1ListComponent;
  let fixture: ComponentFixture<Info1ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Info1ListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Info1ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

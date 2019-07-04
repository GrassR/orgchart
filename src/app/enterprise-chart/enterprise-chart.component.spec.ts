import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseChartComponent } from './enterprise-chart.component';

describe('EnterpriseChartComponent', () => {
  let component: EnterpriseChartComponent;
  let fixture: ComponentFixture<EnterpriseChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterpriseChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterpriseChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

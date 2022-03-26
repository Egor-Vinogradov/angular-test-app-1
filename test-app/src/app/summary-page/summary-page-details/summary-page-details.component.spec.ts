import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryPageDetailsComponent } from './summary-page-details.component';

describe('SummaryPageDetailsComponent', () => {
  let component: SummaryPageDetailsComponent;
  let fixture: ComponentFixture<SummaryPageDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaryPageDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryPageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

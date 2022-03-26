import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryPageAllComponent } from './summary-page-all.component';

describe('SummaryPageAllComponent', () => {
  let component: SummaryPageAllComponent;
  let fixture: ComponentFixture<SummaryPageAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaryPageAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryPageAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

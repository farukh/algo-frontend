import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockPurchaseListComponent } from './stock-purchase-list.component';

describe('StockPurchaseListComponent', () => {
  let component: StockPurchaseListComponent;
  let fixture: ComponentFixture<StockPurchaseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockPurchaseListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StockPurchaseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

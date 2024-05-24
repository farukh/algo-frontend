import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockSaleComponent } from './stock-sale.component';

describe('StockSaleComponent', () => {
  let component: StockSaleComponent;
  let fixture: ComponentFixture<StockSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockSaleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StockSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

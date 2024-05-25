import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockSaleListComponent } from './stock-sale-list.component';

describe('StockSaleListComponent', () => {
  let component: StockSaleListComponent;
  let fixture: ComponentFixture<StockSaleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockSaleListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StockSaleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayVenuesComponent } from './display-venues.component';

describe('DisplayVenuesComponent', () => {
  let component: DisplayVenuesComponent;
  let fixture: ComponentFixture<DisplayVenuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayVenuesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplayVenuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

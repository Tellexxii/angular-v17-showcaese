import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDeferComponent } from './custom-defer.component';

describe('CustomDeferComponent', () => {
  let component: CustomDeferComponent;
  let fixture: ComponentFixture<CustomDeferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomDeferComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomDeferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

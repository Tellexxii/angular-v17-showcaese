import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimedDeferComponent } from './timed-defer.component';

describe('TimedDeferComponent', () => {
  let component: TimedDeferComponent;
  let fixture: ComponentFixture<TimedDeferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimedDeferComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimedDeferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDisplayCounterComponent } from './app-display-counter.component';

describe('AppDisplayCounterComponent', () => {
  let component: AppDisplayCounterComponent;
  let fixture: ComponentFixture<AppDisplayCounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppDisplayCounterComponent]
    });
    fixture = TestBed.createComponent(AppDisplayCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendrierComponent } from './calendrier.component';

describe('CalendrierComponent', () => {
  let component: CalendrierComponent;
  let fixture: ComponentFixture<CalendrierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalendrierComponent]
    });
    fixture = TestBed.createComponent(CalendrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

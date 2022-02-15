import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicHeaderComponent } from './indic-header.component';

describe('IndicHeaderComponent', () => {
  let component: IndicHeaderComponent;
  let fixture: ComponentFixture<IndicHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndicHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

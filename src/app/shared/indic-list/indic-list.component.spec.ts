import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IndicListComponent } from './indic-list.component';

describe('IndicListComponent', () => {
  let component: IndicListComponent;
  let fixture: ComponentFixture<IndicListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndicListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

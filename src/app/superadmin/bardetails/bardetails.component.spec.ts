import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BardetailsComponent } from './bardetails.component';

describe('BardetailsComponent', () => {
  let component: BardetailsComponent;
  let fixture: ComponentFixture<BardetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BardetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BardetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

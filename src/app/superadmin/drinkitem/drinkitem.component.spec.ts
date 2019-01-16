import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkitemComponent } from './drinkitem.component';

describe('DrinkitemComponent', () => {
  let component: DrinkitemComponent;
  let fixture: ComponentFixture<DrinkitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinkitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

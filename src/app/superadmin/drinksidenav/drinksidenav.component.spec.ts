import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinksidenavComponent } from './drinksidenav.component';

describe('DrinksidenavComponent', () => {
  let component: DrinksidenavComponent;
  let fixture: ComponentFixture<DrinksidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinksidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinksidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkmaincontentComponent } from './drinkmaincontent.component';

describe('DrinkmaincontentComponent', () => {
  let component: DrinkmaincontentComponent;
  let fixture: ComponentFixture<DrinkmaincontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinkmaincontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkmaincontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

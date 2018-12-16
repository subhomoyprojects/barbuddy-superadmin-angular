import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarlistingComponent } from './barlisting.component';

describe('BarlistingComponent', () => {
  let component: BarlistingComponent;
  let fixture: ComponentFixture<BarlistingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarlistingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarlistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

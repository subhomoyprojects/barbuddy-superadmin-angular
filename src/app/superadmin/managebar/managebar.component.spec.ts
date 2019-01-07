import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagebarComponent } from './managebar.component';

describe('ManagebarComponent', () => {
  let component: ManagebarComponent;
  let fixture: ComponentFixture<ManagebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

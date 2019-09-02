import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateCreatedComponent } from './date-created.component';

describe('DateCreatedComponent', () => {
  let component: DateCreatedComponent;
  let fixture: ComponentFixture<DateCreatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateCreatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateCreatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

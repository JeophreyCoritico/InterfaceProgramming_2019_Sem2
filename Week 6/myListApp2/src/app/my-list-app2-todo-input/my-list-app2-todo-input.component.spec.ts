import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyListApp2TodoInputComponent } from './my-list-app2-todo-input.component';

describe('MyListApp2TodoInputComponent', () => {
  let component: MyListApp2TodoInputComponent;
  let fixture: ComponentFixture<MyListApp2TodoInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyListApp2TodoInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyListApp2TodoInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

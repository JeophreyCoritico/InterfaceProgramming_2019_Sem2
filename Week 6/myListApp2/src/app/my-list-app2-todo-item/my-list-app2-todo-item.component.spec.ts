import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyListApp2TodoItemComponent } from './my-list-app2-todo-item.component';

describe('MyListApp2TodoItemComponent', () => {
  let component: MyListApp2TodoItemComponent;
  let fixture: ComponentFixture<MyListApp2TodoItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyListApp2TodoItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyListApp2TodoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

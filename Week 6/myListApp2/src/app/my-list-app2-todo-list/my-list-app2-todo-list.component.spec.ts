import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyListApp2TodoListComponent } from './my-list-app2-todo-list.component';

describe('MyListApp2TodoListComponent', () => {
  let component: MyListApp2TodoListComponent;
  let fixture: ComponentFixture<MyListApp2TodoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyListApp2TodoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyListApp2TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

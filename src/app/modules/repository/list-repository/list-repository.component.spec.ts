import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRepositoryComponent } from './list-repository.component';

describe('ListRepositoryComponent', () => {
  let component: ListRepositoryComponent;
  let fixture: ComponentFixture<ListRepositoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRepositoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRepositoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

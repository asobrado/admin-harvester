import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRepositoryComponent } from './new-repository.component';

describe('NewRepositoryComponent', () => {
  let component: NewRepositoryComponent;
  let fixture: ComponentFixture<NewRepositoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRepositoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRepositoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

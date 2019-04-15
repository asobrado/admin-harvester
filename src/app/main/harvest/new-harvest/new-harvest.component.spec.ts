import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHarvestComponent } from './new-harvest.component';

describe('NewHarvestComponent', () => {
  let component: NewHarvestComponent;
  let fixture: ComponentFixture<NewHarvestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewHarvestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewHarvestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

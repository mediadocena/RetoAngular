import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployersTableComponent } from './employers-table.component';

describe('EmployersTableComponent', () => {
  let component: EmployersTableComponent;
  let fixture: ComponentFixture<EmployersTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployersTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

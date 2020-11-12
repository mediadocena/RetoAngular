import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableEmployersFeatureComponent } from './table-employers-feature.component';

describe('TableEmployersFeatureComponent', () => {
  let component: TableEmployersFeatureComponent;
  let fixture: ComponentFixture<TableEmployersFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableEmployersFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableEmployersFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

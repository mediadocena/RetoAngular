import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmployerFeatureComponent } from './edit-employer-feature.component';

describe('EditEmployerFeatureComponent', () => {
  let component: EditEmployerFeatureComponent;
  let fixture: ComponentFixture<EditEmployerFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEmployerFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEmployerFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

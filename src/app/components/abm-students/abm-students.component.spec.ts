import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmStudentsComponent } from './abm-students.component';

describe('AbmStudentsComponent', () => {
  let component: AbmStudentsComponent;
  let fixture: ComponentFixture<AbmStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbmStudentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbmStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

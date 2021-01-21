import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SkillLengthListComponent} from './skill-length-list.component';

describe('SkillLengthListComponent', () => {
  let component: SkillLengthListComponent;
  let fixture: ComponentFixture<SkillLengthListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SkillLengthListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillLengthListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

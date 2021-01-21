import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SkillProficiencyListComponent} from './skill-proficiency-list.component';

describe('SkillProficiencyListComponent', () => {
  let component: SkillProficiencyListComponent;
  let fixture: ComponentFixture<SkillProficiencyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SkillProficiencyListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillProficiencyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

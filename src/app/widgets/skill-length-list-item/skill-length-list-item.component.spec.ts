import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SkillLengthListItemComponent} from './skill-length-list-item.component';

describe('SkillLengthListItemComponent', () => {
  let component: SkillLengthListItemComponent;
  let fixture: ComponentFixture<SkillLengthListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SkillLengthListItemComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillLengthListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

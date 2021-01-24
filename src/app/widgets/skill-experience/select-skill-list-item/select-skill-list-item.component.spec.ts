import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SelectSkillListItemComponent} from './select-skill-list-item.component';

describe('SelectSkillListItemComponent', () => {
  let component: SelectSkillListItemComponent;
  let fixture: ComponentFixture<SelectSkillListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectSkillListItemComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectSkillListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LengthListItemComponent} from './length-list-item.component';

describe('LengthListItemComponent', () => {
  let component: LengthListItemComponent;
  let fixture: ComponentFixture<LengthListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LengthListItemComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LengthListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

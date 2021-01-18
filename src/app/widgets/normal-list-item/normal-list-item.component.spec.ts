import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NormalListItemComponent} from './normal-list-item.component';

describe('NormalListItemComponent', () => {
  let component: NormalListItemComponent;
  let fixture: ComponentFixture<NormalListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NormalListItemComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

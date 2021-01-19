import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NormalListTableItemComponent} from './normal-list-table-item.component';

describe('NormalListTableItemComponent', () => {
  let component: NormalListTableItemComponent;
  let fixture: ComponentFixture<NormalListTableItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NormalListTableItemComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalListTableItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

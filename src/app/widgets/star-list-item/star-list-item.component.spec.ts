import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StarListItemComponent} from './star-list-item.component';

describe('StarListComponentItem', () => {
  let component: StarListItemComponent;
  let fixture: ComponentFixture<StarListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StarListItemComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

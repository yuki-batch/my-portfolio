import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ItemStarListComponent} from './item-star-list.component';

describe('ItemStarListComponent', () => {
  let component: ItemStarListComponent;
  let fixture: ComponentFixture<ItemStarListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ItemStarListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemStarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

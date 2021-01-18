import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ItemLengthListComponent} from './item-length-list.component';

describe('ItemLengthListComponent', () => {
  let component: ItemLengthListComponent;
  let fixture: ComponentFixture<ItemLengthListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ItemLengthListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemLengthListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

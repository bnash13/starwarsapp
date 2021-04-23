import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayListItemComponent } from './display-list-item.component';

describe('DisplayListItemComponent', () => {
  let component: DisplayListItemComponent;
  let fixture: ComponentFixture<DisplayListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

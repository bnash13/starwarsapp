import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualSearchComponent } from './manual-search.component';

describe('ManualSearchComponent', () => {
  let component: ManualSearchComponent;
  let fixture: ComponentFixture<ManualSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

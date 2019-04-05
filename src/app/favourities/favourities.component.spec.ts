import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouritiesComponent } from './favourities.component';

describe('FavouritiesComponent', () => {
  let component: FavouritiesComponent;
  let fixture: ComponentFixture<FavouritiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavouritiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouritiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

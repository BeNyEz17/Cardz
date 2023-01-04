import { ComponentFixture, TestBed } from '@angular/core/testing';

import CardzAllComponent from './cardz-all.component';

describe('CardzAllComponent', () => {
  let component: CardzAllComponent;
  let fixture: ComponentFixture<CardzAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardzAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardzAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

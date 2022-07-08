import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerospotComponent } from './herospot.component';

describe('HerospotComponent', () => {
  let component: HerospotComponent;
  let fixture: ComponentFixture<HerospotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HerospotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HerospotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

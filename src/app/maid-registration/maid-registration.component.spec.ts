import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaidRegistrationComponent } from './maid-registration.component';

describe('MaidRegistrationComponent', () => {
  let component: MaidRegistrationComponent;
  let fixture: ComponentFixture<MaidRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaidRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaidRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPlacerComponent } from './form-placer.component';

describe('FormPlacerComponent', () => {
  let component: FormPlacerComponent;
  let fixture: ComponentFixture<FormPlacerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPlacerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPlacerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

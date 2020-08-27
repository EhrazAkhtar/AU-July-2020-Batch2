import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisFormComponent } from './dis-form.component';

describe('DisFormComponent', () => {
  let component: DisFormComponent;
  let fixture: ComponentFixture<DisFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

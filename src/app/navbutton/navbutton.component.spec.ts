import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbuttonComponent } from './navbutton.component';

describe('NavbuttonComponent', () => {
  let component: NavbuttonComponent;
  let fixture: ComponentFixture<NavbuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

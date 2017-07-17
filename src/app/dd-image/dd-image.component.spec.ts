import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DdImageComponent } from './dd-image.component';

describe('DdImageComponent', () => {
  let component: DdImageComponent;
  let fixture: ComponentFixture<DdImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DdImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DdImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

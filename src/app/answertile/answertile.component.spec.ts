import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswertileComponent } from './answertile.component';

describe('AnswertileComponent', () => {
  let component: AnswertileComponent;
  let fixture: ComponentFixture<AnswertileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswertileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswertileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

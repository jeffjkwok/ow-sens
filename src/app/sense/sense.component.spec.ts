import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SenseComponent } from './sense.component';

describe('SenseComponent', () => {
  let component: SenseComponent;
  let fixture: ComponentFixture<SenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

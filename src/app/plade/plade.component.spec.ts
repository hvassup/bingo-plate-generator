import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PladeComponent } from './plade.component';

describe('PladeComponent', () => {
  let component: PladeComponent;
  let fixture: ComponentFixture<PladeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PladeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PladeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

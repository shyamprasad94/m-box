import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RBoxComponent } from './r-box.component';

describe('RBoxComponent', () => {
  let component: RBoxComponent;
  let fixture: ComponentFixture<RBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

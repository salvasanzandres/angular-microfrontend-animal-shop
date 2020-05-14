import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapWebComponentComponent } from './wrap-web-component.component';

describe('WrapWebComponentComponent', () => {
  let component: WrapWebComponentComponent;
  let fixture: ComponentFixture<WrapWebComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrapWebComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapWebComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

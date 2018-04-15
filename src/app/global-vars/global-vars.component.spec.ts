import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalVarsComponent } from './global-vars.component';

describe('GlobalVarsComponent', () => {
  let component: GlobalVarsComponent;
  let fixture: ComponentFixture<GlobalVarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalVarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalVarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

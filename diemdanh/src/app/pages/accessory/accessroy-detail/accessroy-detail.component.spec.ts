import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessroyDetailComponent } from './accessroy-detail.component';

describe('AccessroyDetailComponent', () => {
  let component: AccessroyDetailComponent;
  let fixture: ComponentFixture<AccessroyDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessroyDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessroyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

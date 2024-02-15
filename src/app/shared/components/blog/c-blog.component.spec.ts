import { ComponentFixture, TestBed } from '@angular/core/testing';

import {  CBlogComponent } from './c-blog.component';

describe('BlogComponent', () => {
  let component: CBlogComponent;
  let fixture: ComponentFixture<CBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

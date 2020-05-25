import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter10Page } from './chapter10.page';

describe('Chapter10Page', () => {
  let component: Chapter10Page;
  let fixture: ComponentFixture<Chapter10Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter10Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

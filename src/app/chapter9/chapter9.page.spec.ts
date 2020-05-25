import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter9Page } from './chapter9.page';

describe('Chapter9Page', () => {
  let component: Chapter9Page;
  let fixture: ComponentFixture<Chapter9Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter9Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter5Page } from './chapter5.page';

describe('Chapter5Page', () => {
  let component: Chapter5Page;
  let fixture: ComponentFixture<Chapter5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter5Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

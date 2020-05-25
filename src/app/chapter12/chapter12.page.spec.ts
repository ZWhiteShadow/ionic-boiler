import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter12Page } from './chapter12.page';

describe('Chapter12Page', () => {
  let component: Chapter12Page;
  let fixture: ComponentFixture<Chapter12Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter12Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter12Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

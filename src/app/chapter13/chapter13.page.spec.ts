import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter13Page } from './chapter13.page';

describe('Chapter13Page', () => {
  let component: Chapter13Page;
  let fixture: ComponentFixture<Chapter13Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter13Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter13Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

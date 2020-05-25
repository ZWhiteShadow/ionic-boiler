import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapter11Page } from './chapter11.page';

describe('Chapter11Page', () => {
  let component: Chapter11Page;
  let fixture: ComponentFixture<Chapter11Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter11Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chapter11Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

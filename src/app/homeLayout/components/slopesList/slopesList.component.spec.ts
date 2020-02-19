/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SlopesListComponent } from './slopesList.component';

describe('SlopesListComponent', () => {
  let component: SlopesListComponent;
  let fixture: ComponentFixture<SlopesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlopesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlopesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

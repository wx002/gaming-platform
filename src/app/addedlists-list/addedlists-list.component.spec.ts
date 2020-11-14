import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedlistsComponent } from './addedlists-list.component';

describe('AddedlistComponent', () => {
  let component: AddedlistsComponent;
  let fixture: ComponentFixture<AddedlistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddedlistsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddedlistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

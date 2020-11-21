import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddgamesComponent } from './addgames.component';

describe('AddgamesComponent', () => {
  let component: AddgamesComponent;
  let fixture: ComponentFixture<AddgamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddgamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddgamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

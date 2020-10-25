import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamedisplayComponent } from './gamedisplay.component';

describe('GamedisplayComponent', () => {
  let component: GamedisplayComponent;
  let fixture: ComponentFixture<GamedisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamedisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamedisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

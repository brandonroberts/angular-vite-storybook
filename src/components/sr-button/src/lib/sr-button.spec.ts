import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrButton } from './sr-button';

describe('SrButton', () => {
  let component: SrButton;
  let fixture: ComponentFixture<SrButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SrButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SrButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

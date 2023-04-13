import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTableStrippedComponent } from './card-table-stripped.component';

describe('CardTableStrippedComponent', () => {
  let component: CardTableStrippedComponent;
  let fixture: ComponentFixture<CardTableStrippedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardTableStrippedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardTableStrippedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMenuPageComponent } from './new-menu-page.component';

describe('NewMenuPageComponent', () => {
  let component: NewMenuPageComponent;
  let fixture: ComponentFixture<NewMenuPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewMenuPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMenuPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

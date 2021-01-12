import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDetailPageComponent } from './menu-detail-page.component';

describe('MenuDetailPageComponent', () => {
  let component: MenuDetailPageComponent;
  let fixture: ComponentFixture<MenuDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuDetailPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

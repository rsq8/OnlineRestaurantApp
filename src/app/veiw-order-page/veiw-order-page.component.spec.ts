import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiwOrderPageComponent } from './veiw-order-page.component';

describe('VeiwOrderPageComponent', () => {
  let component: VeiwOrderPageComponent;
  let fixture: ComponentFixture<VeiwOrderPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeiwOrderPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiwOrderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

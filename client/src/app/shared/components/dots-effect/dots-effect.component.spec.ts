import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotsEffectComponent } from './dots-effect.component';

describe('DotsEffectComponent', () => {
  let component: DotsEffectComponent;
  let fixture: ComponentFixture<DotsEffectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DotsEffectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DotsEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

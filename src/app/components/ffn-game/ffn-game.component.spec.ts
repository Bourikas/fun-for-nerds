import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FfnGameComponent } from './ffn-game.component';

describe('FfnGameComponent', () => {
  let component: FfnGameComponent;
  let fixture: ComponentFixture<FfnGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FfnGameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FfnGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

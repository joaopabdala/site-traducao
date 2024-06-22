import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncludeTextComponent } from './include-text.component';

describe('IncludeTextComponent', () => {
  let component: IncludeTextComponent;
  let fixture: ComponentFixture<IncludeTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncludeTextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IncludeTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

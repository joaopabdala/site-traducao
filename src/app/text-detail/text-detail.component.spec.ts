import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextDetailComponent } from './text-detail.component';

describe('TextDetailComponent', () => {
  let component: TextDetailComponent;
  let fixture: ComponentFixture<TextDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

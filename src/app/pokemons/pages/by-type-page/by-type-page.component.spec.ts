import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByTypePageComponent } from './by-type-page.component';

describe('ByTypePageComponent', () => {
  let component: ByTypePageComponent;
  let fixture: ComponentFixture<ByTypePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ByTypePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ByTypePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

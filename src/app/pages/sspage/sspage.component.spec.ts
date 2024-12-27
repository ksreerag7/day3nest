import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SspageComponent } from './sspage.component';

describe('SspageComponent', () => {
  let component: SspageComponent;
  let fixture: ComponentFixture<SspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SspageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

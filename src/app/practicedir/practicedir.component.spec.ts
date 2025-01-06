import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticedirComponent } from './practicedir.component';

describe('PracticedirComponent', () => {
  let component: PracticedirComponent;
  let fixture: ComponentFixture<PracticedirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PracticedirComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticedirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

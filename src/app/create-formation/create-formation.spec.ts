import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateFormation } from './create-formation';

describe('CreateFormation', () => {
  let component: CreateFormation;
  let fixture: ComponentFixture<CreateFormation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateFormation],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateFormation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

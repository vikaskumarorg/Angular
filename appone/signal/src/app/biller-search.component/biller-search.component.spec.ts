import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BillerSearchComponent } from './biller-search.component';

describe('BillerSearchComponent', () => {
  let component: BillerSearchComponent;
  let fixture: ComponentFixture<BillerSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BillerSearchComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BillerSearchComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

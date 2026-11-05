import { TestBed } from '@angular/core/testing';
import { BillerSearchStore } from './biller-search.store';

describe('BillerSearchStore', () => {
  let service: BillerSearchStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BillerSearchStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

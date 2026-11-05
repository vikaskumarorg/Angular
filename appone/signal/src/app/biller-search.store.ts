import { Injectable, signal, effect } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import {
  debounceTime,
  distinctUntilChanged,
  switchMap,
  catchError,
  of,
} from 'rxjs';
import { BillerService } from './biller.service';
import { Biller, BillersData } from './biller.model';

@Injectable({ providedIn: 'root' })
export class BillerSearchStore {
  // Signals
  searchTerm = signal('');
  billers = signal<Biller[]>(BillersData);
  loading = signal(false);
  error = signal<string | null>(null);

  constructor(private billerService: BillerService) {
    // Convert signal → observable
    const search$ = toObservable(this.searchTerm);

    search$
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap(term => {
          this.loading.set(true);
          this.error.set(null);

          return this.billerService.searchBillers(term).pipe(
            catchError(() => {
              this.error.set('Failed to load billers');
              return of([]);
            })
          );
        })
      )
      .subscribe(results => {
        this.billers.set(results);
        this.loading.set(false);
      });
  }

  setSearchTerm(term: string) {
    this.searchTerm.set(term);
  }
}
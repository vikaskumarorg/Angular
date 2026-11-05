import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, delay, map } from 'rxjs';
import { Biller, BillersData } from './biller.model';

@Injectable({ providedIn: 'root' })
export class BillerService {
  constructor(private http: HttpClient) {}
billersData:Biller[] = BillersData;
  // Mock API (replace with real endpoint)
  searchBillers(term: string): Observable<Biller[]> {
    if (!term.trim()) {
      return of(this.billersData);
    }

    return of(this.billersData).pipe(
      delay(500),
      map(billers =>
        billers.filter(b =>
          b.name.toLowerCase().includes(term.toLowerCase())
        )
      )
    );
  }
}
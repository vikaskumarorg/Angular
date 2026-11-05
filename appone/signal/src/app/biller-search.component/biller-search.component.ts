import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BillerSearchStore } from '../biller-search.store';

@Component({
  selector: 'app-biller-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './biller-search.component.html',
})
export class BillerSearchComponent {
  constructor(public store: BillerSearchStore) {}

  onSearch(term: string) {
    this.store.setSearchTerm(term);
  }
}